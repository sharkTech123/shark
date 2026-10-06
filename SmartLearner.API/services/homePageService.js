const Home = require("../models/homeModel");

const HomeBanner = require("../models/homeBannerModel");
const HomeHowItWorks = require("../models/homeHowItWorksModel");
const HomePackages = require("../models/homePackagesModel");
const HomeWhySmartLearner = require("../models/homeWhySmartLearnerModel");
const HomeLocations = require("../models/homeLocationsModel");

const HomeRecentPasses = require("../models/homeRecentPassesModel");
const HomeTestimonials = require("../models/homeTestimonialsModel");
const HomeCTA = require("../models/homeCtaModel");

/*
|--------------------------------------------------------------------------
| SECTION MODELS
|--------------------------------------------------------------------------
*/

const sectionModels = {
  banner: HomeBanner,
  howItWorks: HomeHowItWorks,
  packagesSection: HomePackages,
  whySmartLearner: HomeWhySmartLearner,
  locations: HomeLocations,
  recentPasses: HomeRecentPasses,
  testimonials: HomeTestimonials,
  cta: HomeCTA,
};

/*
|--------------------------------------------------------------------------
| HOME
|--------------------------------------------------------------------------
*/

/**
 * Create Homepage
 */
const createHome = async (data) => {
  const existingHome = await Home.findOne({
    slug: "home",
  });

  if (existingHome) {
    throw new Error("Homepage already exists");
  }

  return await Home.create({
    name: data.name || "SmartLearner Homepage",
    slug: "home",
    isActive: data.isActive !== undefined ? data.isActive : true,
  });
};

/**
 * Get Complete Homepage
 */
const getHomePage = async () => {
  return await Home.findOne({
    slug: "home",
    isActive: true,
  }).populate([
    "banner",
    "howItWorks",
    "packagesSection",
    "whySmartLearner",
    "locations",
    "recentPasses",
    "testimonials",
    "cta",
  ]);
};

/**
 * Get Homepage By ID
 */
const getHomeById = async (id) => {
  return await Home.findById(id);
};

/**
 * Update Homepage
 */
const updateHome = async (id, data) => {
  return await Home.findByIdAndUpdate(
    id,
    {
      $set: data,
    },
    {
      new: true,
      runValidators: true,
    },
  );
};

/**
 * Delete Homepage + All Sections
 */
const deleteHome = async (id) => {
  const home = await Home.findById(id);

  if (!home) {
    return null;
  }

  /*
  |--------------------------------------------------------------------------
  | Delete all child sections
  |--------------------------------------------------------------------------
  */

  await Promise.all(
    Object.values(sectionModels).map((Model) =>
      Model.deleteMany({
        homeId: home._id,
      }),
    ),
  );

  /*
  |--------------------------------------------------------------------------
  | Delete Homepage
  |--------------------------------------------------------------------------
  */

  await Home.findByIdAndDelete(id);

  return home;
};

/*
|--------------------------------------------------------------------------
| COMMON SECTION HELPERS
|--------------------------------------------------------------------------
*/

/**
 * Get active homepage
 */
const getActiveHome = async () => {
  return await Home.findOne({
    slug: "home",
    isActive: true,
  });
};

/**
 * Get section model
 */
const getSectionModel = (sectionName) => {
  const Model = sectionModels[sectionName];

  if (!Model) {
    throw new Error(`Invalid homepage section: ${sectionName}`);
  }

  return Model;
};

/**
 * Get Section
 */
const getSection = async (sectionName) => {
  const Model = getSectionModel(sectionName);

  const home = await getActiveHome();

  if (!home) {
    throw new Error("Homepage not found");
  }

  return await Model.findOne({
    homeId: home._id,
  });
};

/**
 * Create Section
 */
const createSection = async (sectionName, data) => {
  const Model = getSectionModel(sectionName);

  const home = await getActiveHome();

  if (!home) {
    throw new Error("Homepage not found");
  }

  /*
  |--------------------------------------------------------------------------
  | Prevent duplicate section
  |--------------------------------------------------------------------------
  */

  const existingSection = await Model.findOne({
    homeId: home._id,
  });

  if (existingSection) {
    throw new Error(`${sectionName} section already exists`);
  }

  /*
  |--------------------------------------------------------------------------
  | Automatically attach homeId
  |--------------------------------------------------------------------------
  */

  return await Model.create({
    ...data,
    homeId: home._id,
  });
};

////////////////////new////////////////////
const addTestimonial = async (data) => {
  const Model = getSectionModel("testimonials");

  const home = await getActiveHome();

  if (!home) {
    throw new Error("Homepage not found");
  }

  const existingSection = await Model.findOne({
    homeId: home._id,
  });

  if (!existingSection) {
    throw new Error("Testimonials section not found");
  }

  existingSection.testimonials.push(data);

  await existingSection.save();

  return existingSection;
};


/**
 * Update Section
 */
const updateSection = async (sectionName, id, data) => {
  const Model = getSectionModel(sectionName);

  /*
  |--------------------------------------------------------------------------
  | Never allow homeId to be changed from request
  |--------------------------------------------------------------------------
  */

  const updateData = {
    ...data,
  };

  delete updateData.homeId;

  return await Model.findByIdAndUpdate(
    id,
    {
      $set: updateData,
    },
    {
      new: true,
      runValidators: true,
    },
  );
};

/**
 * Delete Section
 */
const deleteSection = async (sectionName, id) => {
  const Model = getSectionModel(sectionName);

  return await Model.findByIdAndDelete(id);
};

/*
|--------------------------------------------------------------------------
| BANNER
|--------------------------------------------------------------------------
*/

const getBanner = () => getSection("banner");

const createBanner = (data) => createSection("banner", data);

const updateBanner = (id, data) => updateSection("banner", id, data);

const deleteBanner = (id) => deleteSection("banner", id);

/*
|--------------------------------------------------------------------------
| HOW IT WORKS
|--------------------------------------------------------------------------
*/

const getHowItWorks = () => getSection("howItWorks");

const createHowItWorks = (data) => createSection("howItWorks", data);

const updateHowItWorks = (id, data) => updateSection("howItWorks", id, data);

const deleteHowItWorks = (id) => deleteSection("howItWorks", id);

/*
|--------------------------------------------------------------------------
| PACKAGES SECTION
|--------------------------------------------------------------------------
*/

const getPackagesSection = () => getSection("packagesSection");

const createPackagesSection = (data) => createSection("packagesSection", data);

const updatePackagesSection = (id, data) =>
  updateSection("packagesSection", id, data);

const deletePackagesSection = (id) => deleteSection("packagesSection", id);

/*
|--------------------------------------------------------------------------
| WHY SMARTLEARNER
|--------------------------------------------------------------------------
*/

const getWhySmartLearner = () => getSection("whySmartLearner");

const createWhySmartLearner = (data) => createSection("whySmartLearner", data);

const updateWhySmartLearner = (id, data) =>
  updateSection("whySmartLearner", id, data);

const deleteWhySmartLearner = (id) => deleteSection("whySmartLearner", id);

/*
|--------------------------------------------------------------------------
| LOCATIONS
|--------------------------------------------------------------------------
*/

const getLocations = () => getSection("locations");

const createLocations = (data) => createSection("locations", data);

const updateLocations = (id, data) => updateSection("locations", id, data);

const deleteLocations = (id) => deleteSection("locations", id);

/*
|--------------------------------------------------------------------------
| RECENT PASSES
|--------------------------------------------------------------------------
*/

const getRecentPasses = () => getSection("recentPasses");

const createRecentPasses = (data) => createSection("recentPasses", data);

const updateRecentPasses = (id, data) =>
  updateSection("recentPasses", id, data);

const deleteRecentPasses = (id) => deleteSection("recentPasses", id);

/*
|--------------------------------------------------------------------------
| TESTIMONIALS
|--------------------------------------------------------------------------
*/

const getTestimonials = () => getSection("testimonials");

const createTestimonials = (data) => createSection("testimonials", data);

const updateTestimonials = (id, data) =>
  updateSection("testimonials", id, data);

const deleteTestimonials = (id) => deleteSection("testimonials", id);

/*
|--------------------------------------------------------------------------
| CTA
|--------------------------------------------------------------------------
*/

const getCTA = () => getSection("cta");

const createCTA = (data) => createSection("cta", data);

const updateCTA = (id, data) => updateSection("cta", id, data);

const deleteCTA = (id) => deleteSection("cta", id);

/*
|--------------------------------------------------------------------------
| EXPORTS
|--------------------------------------------------------------------------
*/

module.exports = {
  // Home
  createHome,
  getHomePage,
  getHomeById,
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
