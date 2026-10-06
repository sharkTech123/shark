const homeService = require("../services/homePageService");

/*
|--------------------------------------------------------------------------
| HELPER
|--------------------------------------------------------------------------
*/

const handleError = (res, error, defaultMessage) => {
  console.error(error);

  return res.status(500).json({
    success: false,
    message: error.message || defaultMessage,
  });
};

/*
|--------------------------------------------------------------------------
| HOMEPAGE
|--------------------------------------------------------------------------
*/

/**
 * GET COMPLETE HOMEPAGE
 *
 * GET /api/home
 */
const getHomePage = async (req, res) => {
  try {
    const home = await homeService.getHomePage();

    if (!home) {
      return res.status(404).json({
        success: false,
        message: "Homepage not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Homepage fetched successfully",
      data: home,
    });
  } catch (error) {
    return handleError(res, error, "Failed to fetch homepage");
  }
};

/**
 * CREATE HOME
 *
 * POST /api/add-home
 */
const createHome = async (req, res) => {
  try {
    const home = await homeService.createHome(req.body);

    return res.status(201).json({
      success: true,
      message: "Homepage created successfully",
      data: home,
    });
  } catch (error) {
    return handleError(res, error, "Failed to create homepage");
  }
};

/**
 * UPDATE HOME
 *
 * POST /api/update-home/:id
 */
const updateHome = async (req, res) => {
  try {
    const home = await homeService.updateHome(req.params.id, req.body);

    if (!home) {
      return res.status(404).json({
        success: false,
        message: "Homepage not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Homepage updated successfully",
      data: home,
    });
  } catch (error) {
    return handleError(res, error, "Failed to update homepage");
  }
};

/**
 * DELETE HOME
 *
 * POST /api/delete-home/:id
 */
const deleteHome = async (req, res) => {
  try {
    const home = await homeService.deleteHome(req.params.id);

    if (!home) {
      return res.status(404).json({
        success: false,
        message: "Homepage not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Homepage and all sections deleted successfully",
    });
  } catch (error) {
    return handleError(res, error, "Failed to delete homepage");
  }
};

/*
|--------------------------------------------------------------------------
| BANNER
|--------------------------------------------------------------------------
*/

const getBanner = async (req, res) => {
  try {
    const data = await homeService.getBanner();

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Banner not found",
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to fetch banner");
  }
};

const createBanner = async (req, res) => {
  try {
    const data = await homeService.createBanner(req.body);

    return res.status(201).json({
      success: true,
      message: "Banner created successfully",
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to create banner");
  }
};

const updateBanner = async (req, res) => {
  try {
    const data = await homeService.updateBanner(req.params.id, req.body);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Banner not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Banner updated successfully",
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to update banner");
  }
};

const deleteBanner = async (req, res) => {
  try {
    const data = await homeService.deleteBanner(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Banner not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Banner deleted successfully",
    });
  } catch (error) {
    return handleError(res, error, "Failed to delete banner");
  }
};

/*
|--------------------------------------------------------------------------
| HOW IT WORKS
|--------------------------------------------------------------------------
*/

const getHowItWorks = async (req, res) => {
  try {
    const data = await homeService.getHowItWorks();

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "How It Works section not found",
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to fetch How It Works");
  }
};

const createHowItWorks = async (req, res) => {
  try {
    const data = await homeService.createHowItWorks(req.body);

    return res.status(201).json({
      success: true,
      message: "How It Works section created successfully",
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to create How It Works");
  }
};

const updateHowItWorks = async (req, res) => {
  try {
    const data = await homeService.updateHowItWorks(req.params.id, req.body);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "How It Works section not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "How It Works section updated successfully",
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to update How It Works");
  }
};

const deleteHowItWorks = async (req, res) => {
  try {
    const data = await homeService.deleteHowItWorks(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "How It Works section not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "How It Works section deleted successfully",
    });
  } catch (error) {
    return handleError(res, error, "Failed to delete How It Works");
  }
};

/*
|--------------------------------------------------------------------------
| PACKAGES SECTION
|--------------------------------------------------------------------------
*/

const getPackagesSection = async (req, res) => {
  try {
    const data = await homeService.getPackagesSection();

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Packages section not found",
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to fetch Packages section");
  }
};

const createPackagesSection = async (req, res) => {
  try {
    const data = await homeService.createPackagesSection(req.body);

    return res.status(201).json({
      success: true,
      message: "Packages section created successfully",
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to create Packages section");
  }
};

const updatePackagesSection = async (req, res) => {
  try {
    const data = await homeService.updatePackagesSection(
      req.params.id,
      req.body,
    );

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Packages section not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Packages section updated successfully",
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to update Packages section");
  }
};

const deletePackagesSection = async (req, res) => {
  try {
    const data = await homeService.deletePackagesSection(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Packages section not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Packages section deleted successfully",
    });
  } catch (error) {
    return handleError(res, error, "Failed to delete Packages section");
  }
};

/*
|--------------------------------------------------------------------------
| WHY SMARTLEARNER
|--------------------------------------------------------------------------
*/

const getWhySmartLearner = async (req, res) => {
  try {
    const data = await homeService.getWhySmartLearner();

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Why SmartLearner section not found",
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to fetch Why SmartLearner");
  }
};

const createWhySmartLearner = async (req, res) => {
  try {
    const data = await homeService.createWhySmartLearner(req.body);

    return res.status(201).json({
      success: true,
      message: "Why SmartLearner section created successfully",
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to create Why SmartLearner");
  }
};

const updateWhySmartLearner = async (req, res) => {
  try {
    const data = await homeService.updateWhySmartLearner(
      req.params.id,
      req.body,
    );

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Why SmartLearner section not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Why SmartLearner section updated successfully",
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to update Why SmartLearner");
  }
};

const deleteWhySmartLearner = async (req, res) => {
  try {
    const data = await homeService.deleteWhySmartLearner(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Why SmartLearner section not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Why SmartLearner section deleted successfully",
    });
  } catch (error) {
    return handleError(res, error, "Failed to delete Why SmartLearner");
  }
};

/*
|--------------------------------------------------------------------------
| LOCATIONS
|--------------------------------------------------------------------------
*/

const getLocations = async (req, res) => {
  try {
    const data = await homeService.getLocations();

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Locations not found",
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to fetch locations");
  }
};

const createLocations = async (req, res) => {
  try {
    const data = await homeService.createLocations(req.body);

    return res.status(201).json({
      success: true,
      message: "Locations created successfully",
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to create locations");
  }
};

const updateLocations = async (req, res) => {
  try {
    const data = await homeService.updateLocations(req.params.id, req.body);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Locations not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Locations updated successfully",
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to update locations");
  }
};

const deleteLocations = async (req, res) => {
  try {
    const data = await homeService.deleteLocations(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Locations not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Locations deleted successfully",
    });
  } catch (error) {
    return handleError(res, error, "Failed to delete locations");
  }
};

/*
|--------------------------------------------------------------------------
| RECENT PASSES
|--------------------------------------------------------------------------
*/

const getRecentPasses = async (req, res) => {
  try {
    const data = await homeService.getRecentPasses();

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Recent passes not found",
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to fetch recent passes");
  }
};

const createRecentPasses = async (req, res) => {
  try {
    let students = [];

    if (req.body.students) {
      students = JSON.parse(req.body.students);
    }

    // Attach uploaded images to corresponding students
    if (req.files && req.files.length > 0) {
      req.files.forEach((file) => {
        const match = file.fieldname.match(
          /^students\[(\d+)\]\.image$/
        );

        if (match) {
          const index = Number(match[1]);

          if (students[index]) {
            students[index].image = file.filename;
          }
        }
      });
    }

    const data = await homeService.createRecentPasses({
      ...req.body,
      students,
    });

    return res.status(201).json({
      success: true,
      message: "Recent passes created successfully",
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to create recent passes");
  }
};

const updateRecentPasses = async (req, res) => {
  try {
    let students = [];

    if (req.body.students) {
      students = JSON.parse(req.body.students);
    }

    // Attach uploaded images to corresponding students
    if (req.files && req.files.length > 0) {
      req.files.forEach((file) => {
        const match = file.fieldname.match(
          /^students\[(\d+)\]\.image$/
        );

        if (match) {
          const index = Number(match[1]);

          if (students[index]) {
            students[index].image = file.filename;
          }
        }
      });
    }

    const data = await homeService.updateRecentPasses(
      req.params.id,
      {
        ...req.body,
        students,
      },
    );

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Recent passes not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Recent passes updated successfully",
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to update recent passes");
  }
};

const deleteRecentPasses = async (req, res) => {
  try {
    const data = await homeService.deleteRecentPasses(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Recent passes not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Recent passes deleted successfully",
    });
  } catch (error) {
    return handleError(res, error, "Failed to delete recent passes");
  }
};

/*
|--------------------------------------------------------------------------
| TESTIMONIALS
|--------------------------------------------------------------------------
*/

const getTestimonials = async (req, res) => {
  try {
    const data = await homeService.getTestimonials();

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Testimonials not found",
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to fetch testimonials");
  }
};





const addTestimonial = async (req, res) => {
  try {
    const data = await homeService.addTestimonial(req.body);

    return res.status(201).json({
      success: true,
      message: "Review submitted successfully",
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to submit review");
  }
};

const parseTestimonials = (req) => {
  let testimonials = [];

  if (req.body.testimonials) {
    testimonials =
      typeof req.body.testimonials === "string"
        ? JSON.parse(req.body.testimonials)
        : req.body.testimonials;
  }

  // Attach uploaded avatars: fieldname is "testimonials[0].avatar"
  (req.files || []).forEach((file) => {
    const match = file.fieldname.match(/^testimonials\[(\d+)\]\.avatar$/);
    if (match) {
      const index = Number(match[1]);
      if (testimonials[index]) testimonials[index].avatar = file.filename;
    }
  });

  return testimonials;
};

const createTestimonials = async (req, res) => {
  try {
    const testimonials = parseTestimonials(req);
    const data = await homeService.createTestimonials({
      ...req.body,
      testimonials,
    });

    return res.status(201).json({
      success: true,
      message: "Testimonials created successfully",
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to create testimonials");
  }
};

const updateTestimonials = async (req, res) => {
  try {
    const testimonials = parseTestimonials(req);
    const data = await homeService.updateTestimonials(req.params.id, {
      ...req.body,
      testimonials,
    });

    if (!data) {
      return res.status(404).json({ success: false, message: "Testimonials not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Testimonials updated successfully",
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to update testimonials");
  }
};

const deleteTestimonials = async (req, res) => {
  try {
    const data = await homeService.deleteTestimonials(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Testimonials not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Testimonials deleted successfully",
    });
  } catch (error) {
    return handleError(res, error, "Failed to delete testimonials");
  }
};

/*
|--------------------------------------------------------------------------
| CTA
|--------------------------------------------------------------------------
*/

const getCTA = async (req, res) => {
  try {
    const data = await homeService.getCTA();

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "CTA not found",
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to fetch CTA");
  }
};

const createCTA = async (req, res) => {
  try {
    const data = await homeService.createCTA(req.body);

    return res.status(201).json({
      success: true,
      message: "CTA created successfully",
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to create CTA");
  }
};

const updateCTA = async (req, res) => {
  try {
    const data = await homeService.updateCTA(req.params.id, req.body);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "CTA not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "CTA updated successfully",
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to update CTA");
  }
};

const deleteCTA = async (req, res) => {
  try {
    const data = await homeService.deleteCTA(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "CTA not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "CTA deleted successfully",
    });
  } catch (error) {
    return handleError(res, error, "Failed to delete CTA");
  }
};

/*
|--------------------------------------------------------------------------
| EXPORT CONTROLLERS
|--------------------------------------------------------------------------
*/

module.exports = {
  // Home
  getHomePage,
  createHome,
  updateHome,
  deleteHome,

  // Banner
  getBanner,
  createBanner,
  updateBanner,
  deleteBanner,

  // How It Works
  getHowItWorks,
  createHowItWorks,
  updateHowItWorks,
  deleteHowItWorks,

  // Packages
  getPackagesSection,
  createPackagesSection,
  updatePackagesSection,
  deletePackagesSection,

  // Why SmartLearner
  getWhySmartLearner,
  createWhySmartLearner,
  updateWhySmartLearner,
  deleteWhySmartLearner,

  // Locations
  getLocations,
  createLocations,
  updateLocations,
  deleteLocations,

  // Recent Passes
  getRecentPasses,
  createRecentPasses,
  updateRecentPasses,
  deleteRecentPasses,

  // Testimonials
  getTestimonials,
  createTestimonials,
  addTestimonial,
  updateTestimonials,
  deleteTestimonials,

  // CTA
  getCTA,
  createCTA,
  updateCTA,
  deleteCTA,
};
