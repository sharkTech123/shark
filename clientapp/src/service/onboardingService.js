const API_BASE = "https://api.smartlearner.com/api";

/**
 * Fetches one level of the onboarding tree.
 * @param {string|null} parentId - null for root-level options
 */
export async function fetchOnboardingNodes(parentId = null) {
  const query = parentId ? `?parentId=${encodeURIComponent(parentId)}` : '';
  const response = await fetch(`${API_BASE}/onboarding/nodes${query}`, {
    method: 'GET',
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Failed to load options (status ${response.status})`);
  }

  const json = await response.json();
  if (!json.success) {
    throw new Error(json.message || 'Failed to load options');
  }

  return json.data; // array of { id, label, type, isLeaf, redirectPath? }
}