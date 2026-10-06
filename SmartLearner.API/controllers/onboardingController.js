
const OnboardingNode = require('../models/OnboardingNode');


const SAFE_INTERNAL_PATH = /^\/[a-zA-Z0-9\-_/]*$/;

/**
 * GET /api/onboarding/nodes?parentId=<id|null>
 * Returns only the immediate children of the given node (or root nodes if
 * parentId is omitted/null). This is the core of the "lazy" wizard: each
 * click fetches one small, cheap payload instead of the whole tree.
 */
exports.getChildren = async (req, res) => {
  try {
    const { parentId } = req.query; // already validated by middleware

    const nodes = await OnboardingNode.find({
      parentId: parentId, // null matches root nodes
      isActive: true,
    })
      .sort({ order: 1, label: 1 })
      .select('label type redirectPath order')
      .lean();

    const safeNodes = nodes.map((node) => {
      const isLeaf = node.type !== 'category';
      const redirectPath =
        isLeaf && typeof node.redirectPath === 'string' && SAFE_INTERNAL_PATH.test(node.redirectPath)
          ? node.redirectPath
          : undefined;

      return {
        id: node._id,
        label: node.label,
        type: node.type,
        isLeaf,
        // Leaf nodes with no valid redirectPath are dropped from the response
        // rather than sent with a broken/unsafe link.
        ...(isLeaf ? { redirectPath } : {}),
      };
    });

    // Never surface a leaf option that lacks a safe redirect target.
    const filtered = safeNodes.filter((n) => !n.isLeaf || n.redirectPath);

    return res.status(200).json({
      success: true,
      count: filtered.length,
      data: filtered,
    });
  } catch (err) {
    // Don't leak internals to the client.
    console.error('[onboarding] getChildren error:', err.message);
    return res.status(500).json({
      success: false,
      message: 'Unable to load options right now. Please try again.',
    });
  }
};