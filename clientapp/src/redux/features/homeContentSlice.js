// src/features/home/homeSlice.js
import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    // ============ HOMEPAGE ============
    home: null,
    homeLoading: false,

    // ============ BANNER ============
    banner: null,
    bannerLoading: false,

    // ============ HOW IT WORKS ============
    howItWorks: null,
    howItWorksLoading: false,

    // ============ PACKAGES SECTION ============
    packagesSection: null,
    packagesSectionLoading: false,

    // ============ WHY SMARTLEARNER ============
    whySmartLearner: null,
    whySmartLearnerLoading: false,

    // ============ LOCATIONS ============
    locations: null,
    locationsLoading: false,

    // ============ RECENT PASSES ============
    recentPasses: null,
    recentPassesLoading: false,

    // ============ TESTIMONIALS ============
    testimonials: null,
    testimonialsLoading: false,

    // ============ CTA ============
    cta: null,
    ctaLoading: false,
  },
  reducers: {
    /* ============================================================
           HOMEPAGE REDUCERS
           ============================================================ */
    getHomePageSuccess: (state, action) => {
      const home = action.payload;

      state.home = home;
      state.homeLoading = false;

      // ✅ Auto-distribute populated sections
      state.banner = home.banner || null;
      state.howItWorks = home.howItWorks || null;
      state.packagesSection = home.packagesSection || null;
      state.whySmartLearner = home.whySmartLearner || null;
      state.locations = home.locations || null;
      state.recentPasses = home.recentPasses || null;
      state.testimonials = home.testimonials || null;
      state.cta = home.cta || null;
    },
    getHomePageFailure: (state) => {
      state.home = null;
      state.homeLoading = false;
    },
    setHomeLoading: (state) => {
      state.homeLoading = true;
    },
    createHomeSuccess: (state, action) => {
      state.home = action.payload;
      state.homeLoading = false;
    },
    createHomeFailure: (state) => {
      state.homeLoading = false;
    },
    updateHomeSuccess: (state, action) => {
      state.home = action.payload;
      state.homeLoading = false;
    },
    updateHomeFailure: (state) => {
      state.homeLoading = false;
    },
    deleteHomeSuccess: (state) => {
      state.home = null;
      state.homeLoading = false;
    },
    deleteHomeFailure: (state) => {
      state.homeLoading = false;
    },

    /* ============================================================
           BANNER REDUCERS
           ============================================================ */
    getBannerSuccess: (state, action) => {
      state.banner = action.payload;
      state.bannerLoading = false;
    },
    getBannerFailure: (state) => {
      state.banner = null;
      state.bannerLoading = false;
    },
    createBannerSuccess: (state, action) => {
      state.banner = action.payload;
      state.bannerLoading = false;
    },
    createBannerFailure: (state) => {
      state.bannerLoading = false;
    },
    updateBannerSuccess: (state, action) => {
      state.banner = action.payload;
      state.bannerLoading = false;
    },
    updateBannerFailure: (state) => {
      state.bannerLoading = false;
    },
    deleteBannerSuccess: (state) => {
      state.banner = null;
      state.bannerLoading = false;
    },
    deleteBannerFailure: (state) => {
      state.bannerLoading = false;
    },

    /* ============================================================
           HOW IT WORKS REDUCERS
           ============================================================ */
    getHowItWorksSuccess: (state, action) => {
      state.howItWorks = action.payload;
      state.howItWorksLoading = false;
    },
    getHowItWorksFailure: (state) => {
      state.howItWorks = null;
      state.howItWorksLoading = false;
    },
    createHowItWorksSuccess: (state, action) => {
      state.howItWorks = action.payload;
      state.howItWorksLoading = false;
    },
    createHowItWorksFailure: (state) => {
      state.howItWorksLoading = false;
    },
    updateHowItWorksSuccess: (state, action) => {
      state.howItWorks = action.payload;
      state.howItWorksLoading = false;
    },
    updateHowItWorksFailure: (state) => {
      state.howItWorksLoading = false;
    },
    deleteHowItWorksSuccess: (state) => {
      state.howItWorks = null;
      state.howItWorksLoading = false;
    },
    deleteHowItWorksFailure: (state) => {
      state.howItWorksLoading = false;
    },

    /* ============================================================
           PACKAGES SECTION REDUCERS
           ============================================================ */
    getPackagesSectionSuccess: (state, action) => {
      state.packagesSection = action.payload;
      state.packagesSectionLoading = false;
    },
    getPackagesSectionFailure: (state) => {
      state.packagesSection = null;
      state.packagesSectionLoading = false;
    },
    createPackagesSectionSuccess: (state, action) => {
      state.packagesSection = action.payload;
      state.packagesSectionLoading = false;
    },
    createPackagesSectionFailure: (state) => {
      state.packagesSectionLoading = false;
    },
    updatePackagesSectionSuccess: (state, action) => {
      state.packagesSection = action.payload;
      state.packagesSectionLoading = false;
    },
    updatePackagesSectionFailure: (state) => {
      state.packagesSectionLoading = false;
    },
    deletePackagesSectionSuccess: (state) => {
      state.packagesSection = null;
      state.packagesSectionLoading = false;
    },
    deletePackagesSectionFailure: (state) => {
      state.packagesSectionLoading = false;
    },

    /* ============================================================
           WHY SMARTLEARNER REDUCERS
           ============================================================ */
    getWhySmartLearnerSuccess: (state, action) => {
      state.whySmartLearner = action.payload;
      state.whySmartLearnerLoading = false;
    },
    getWhySmartLearnerFailure: (state) => {
      state.whySmartLearner = null;
      state.whySmartLearnerLoading = false;
    },
    createWhySmartLearnerSuccess: (state, action) => {
      state.whySmartLearner = action.payload;
      state.whySmartLearnerLoading = false;
    },
    createWhySmartLearnerFailure: (state) => {
      state.whySmartLearnerLoading = false;
    },
    updateWhySmartLearnerSuccess: (state, action) => {
      state.whySmartLearner = action.payload;
      state.whySmartLearnerLoading = false;
    },
    updateWhySmartLearnerFailure: (state) => {
      state.whySmartLearnerLoading = false;
    },
    deleteWhySmartLearnerSuccess: (state) => {
      state.whySmartLearner = null;
      state.whySmartLearnerLoading = false;
    },
    deleteWhySmartLearnerFailure: (state) => {
      state.whySmartLearnerLoading = false;
    },

    /* ============================================================
           LOCATIONS REDUCERS
           ============================================================ */
    getLocationsSuccess: (state, action) => {
      state.locations = action.payload;
      state.locationsLoading = false;
    },
    getLocationsFailure: (state) => {
      state.locations = null;
      state.locationsLoading = false;
    },
    createLocationsSuccess: (state, action) => {
      state.locations = action.payload;
      state.locationsLoading = false;
    },
    createLocationsFailure: (state) => {
      state.locationsLoading = false;
    },
    updateLocationsSuccess: (state, action) => {
      state.locations = action.payload;
      state.locationsLoading = false;
    },
    updateLocationsFailure: (state) => {
      state.locationsLoading = false;
    },
    deleteLocationsSuccess: (state) => {
      state.locations = null;
      state.locationsLoading = false;
    },
    deleteLocationsFailure: (state) => {
      state.locationsLoading = false;
    },

    /* ============================================================
           RECENT PASSES REDUCERS
           ============================================================ */
    getRecentPassesSuccess: (state, action) => {
      state.recentPasses = action.payload;
      state.recentPassesLoading = false;
    },
    getRecentPassesFailure: (state) => {
      state.recentPasses = null;
      state.recentPassesLoading = false;
    },
    createRecentPassesSuccess: (state, action) => {
      state.recentPasses = action.payload;
      state.recentPassesLoading = false;
    },
    createRecentPassesFailure: (state) => {
      state.recentPassesLoading = false;
    },
    updateRecentPassesSuccess: (state, action) => {
      state.recentPasses = action.payload;
      state.recentPassesLoading = false;
    },
    updateRecentPassesFailure: (state) => {
      state.recentPassesLoading = false;
    },
    deleteRecentPassesSuccess: (state) => {
      state.recentPasses = null;
      state.recentPassesLoading = false;
    },
    deleteRecentPassesFailure: (state) => {
      state.recentPassesLoading = false;
    },

    /* ============================================================
           TESTIMONIALS REDUCERS
           ============================================================ */
    getTestimonialsSuccess: (state, action) => {
      state.testimonials = action.payload;
      state.testimonialsLoading = false;
    },
    getTestimonialsFailure: (state) => {
      state.testimonials = null;
      state.testimonialsLoading = false;
    },
    createTestimonialsSuccess: (state, action) => {
      state.testimonials = action.payload;
      state.testimonialsLoading = false;
    },
    createTestimonialsFailure: (state) => {
      state.testimonialsLoading = false;
    },
    updateTestimonialsSuccess: (state, action) => {
      state.testimonials = action.payload;
      state.testimonialsLoading = false;
    },
    updateTestimonialsFailure: (state) => {
      state.testimonialsLoading = false;
    },
    deleteTestimonialsSuccess: (state) => {
      state.testimonials = null;
      state.testimonialsLoading = false;
    },
    deleteTestimonialsFailure: (state) => {
      state.testimonialsLoading = false;
    },

    /* ============================================================
           CTA REDUCERS
           ============================================================ */
    getCTASuccess: (state, action) => {
      state.cta = action.payload;
      state.ctaLoading = false;
    },
    getCTAFailure: (state) => {
      state.cta = null;
      state.ctaLoading = false;
    },
    createCTASuccess: (state, action) => {
      state.cta = action.payload;
      state.ctaLoading = false;
    },
    createCTAFailure: (state) => {
      state.ctaLoading = false;
    },
    updateCTASuccess: (state, action) => {
      state.cta = action.payload;
      state.ctaLoading = false;
    },
    updateCTAFailure: (state) => {
      state.ctaLoading = false;
    },
    deleteCTASuccess: (state) => {
      state.cta = null;
      state.ctaLoading = false;
    },
    deleteCTAFailure: (state) => {
      state.ctaLoading = false;
    },

    /* ============================================================
           LOADING HELPERS
           ============================================================ */

    setBannerLoading: (state) => {
      state.bannerLoading = true;
    },
    setHowItWorksLoading: (state) => {
      state.howItWorksLoading = true;
    },
    setPackagesSectionLoading: (state) => {
      state.packagesSectionLoading = true;
    },
    setWhySmartLearnerLoading: (state) => {
      state.whySmartLearnerLoading = true;
    },
    setLocationsLoading: (state) => {
      state.locationsLoading = true;
    },
    setRecentPassesLoading: (state) => {
      state.recentPassesLoading = true;
    },
    setTestimonialsLoading: (state) => {
      state.testimonialsLoading = true;
    },
    setCTALoading: (state) => {
      state.ctaLoading = true;
    },
  },
});

/* ============================================================
   HOMEPAGE THUNKS
   ============================================================ */

export const getHomePage = () => async (dispatch) => {
  try {
    dispatch(setHomeLoading());
    const response = await httpHandler.get(`/api/home/home`);
    if (response.data.success) {
      dispatch(getHomePageSuccess(response.data.data));
      console.log("thunk fired, response =", response?.data);
    } else {
      toast.error(response.data.message);
      dispatch(getHomePageFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getHomePageFailure());
  }
};

export const createHome = (data, reset, toggleModal) => async (dispatch) => {
  try {
    dispatch(setHomeLoading());
    const response = await httpHandler.post(`/api/home/add-home`, data);
    if (response.data.success) {
      reset?.();
      toggleModal?.();
      dispatch(createHomeSuccess(response.data.data));
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
      dispatch(createHomeFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(createHomeFailure());
  }
};

export const updateHome = (id, data, toggleModal) => async (dispatch) => {
  try {
    dispatch(setHomeLoading());
    const response = await httpHandler.post(
      `/api/home/update-home/${id}`,
      data,
    );
    if (response.data.success) {
      toggleModal?.();
      dispatch(updateHomeSuccess(response.data.data));
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
      dispatch(updateHomeFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(updateHomeFailure());
  }
};

export const deleteHome = (id, onSuccess) => async (dispatch) => {
  try {
    dispatch(setHomeLoading());
    const response = await httpHandler.post(`/api/home/delete-home/${id}`);
    if (response.data.success) {
      dispatch(deleteHomeSuccess());
      toast.success(response.data.message);
      onSuccess?.();
    } else {
      toast.error(response.data.message);
      dispatch(deleteHomeFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(deleteHomeFailure());
  }
};

/* ============================================================
   BANNER THUNKS
   ============================================================ */

export const getBanner = () => async (dispatch) => {
  try {
    dispatch(setBannerLoading());
    const response = await httpHandler.get(`/api/home/banner`);
    if (response.data.success) {
      dispatch(getBannerSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getBannerFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getBannerFailure());
  }
};

export const createBanner = (data, reset, toggleModal) => async (dispatch) => {
  try {
    dispatch(setBannerLoading());
    const response = await httpHandler.post(`/api/home/add-banner`, data);
    if (response.data.success) {
      reset?.();
      toggleModal?.();
      dispatch(createBannerSuccess(response.data.data));
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
      dispatch(createBannerFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(createBannerFailure());
  }
};

export const updateBanner = (id, data, toggleModal) => async (dispatch) => {
  try {
    dispatch(setBannerLoading());
    const response = await httpHandler.post(
      `/api/home/update-banner/${id}`,
      data,
    );
    if (response.data.success) {
      toggleModal?.();
      dispatch(updateBannerSuccess(response.data.data));
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
      dispatch(updateBannerFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(updateBannerFailure());
  }
};

export const deleteBanner = (id, onSuccess) => async (dispatch) => {
  try {
    dispatch(setBannerLoading());
    const response = await httpHandler.post(`/api/home/delete-banner/${id}`);
    if (response.data.success) {
      dispatch(deleteBannerSuccess());
      toast.success(response.data.message);
      onSuccess?.();
    } else {
      toast.error(response.data.message);
      dispatch(deleteBannerFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(deleteBannerFailure());
  }
};

/* ============================================================
   HOW IT WORKS THUNKS
   ============================================================ */

export const getHowItWorks = () => async (dispatch) => {
  try {
    dispatch(setHowItWorksLoading());
    const response = await httpHandler.get(`/api/home/how-it-works`);
    if (response.data.success) {
      dispatch(getHowItWorksSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getHowItWorksFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getHowItWorksFailure());
  }
};

export const createHowItWorks =
  (data, reset, toggleModal) => async (dispatch) => {
    try {
      dispatch(setHowItWorksLoading());
      const response = await httpHandler.post(
        `/api/home/add-how-it-works`,
        data,
      );
      if (response.data.success) {
        reset?.();
        toggleModal?.();
        dispatch(createHowItWorksSuccess(response.data.data));
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
        dispatch(createHowItWorksFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(createHowItWorksFailure());
    }
  };

export const updateHowItWorks = (id, data, toggleModal) => async (dispatch) => {
  try {
    dispatch(setHowItWorksLoading());
    const response = await httpHandler.post(
      `/api/home/update-how-it-works/${id}`,
      data,
    );
    if (response.data.success) {
      toggleModal?.();
      dispatch(updateHowItWorksSuccess(response.data.data));
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
      dispatch(updateHowItWorksFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(updateHowItWorksFailure());
  }
};

export const deleteHowItWorks = (id, onSuccess) => async (dispatch) => {
  try {
    dispatch(setHowItWorksLoading());
    const response = await httpHandler.post(
      `/api/home/delete-how-it-works/${id}`,
    );
    if (response.data.success) {
      dispatch(deleteHowItWorksSuccess());
      toast.success(response.data.message);
      onSuccess?.();
    } else {
      toast.error(response.data.message);
      dispatch(deleteHowItWorksFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(deleteHowItWorksFailure());
  }
};

/* ============================================================
   PACKAGES SECTION THUNKS
   ============================================================ */

export const getPackagesSection = () => async (dispatch) => {
  try {
    dispatch(setPackagesSectionLoading());
    const response = await httpHandler.get(`/api/home/packages-section`);
    if (response.data.success) {
      dispatch(getPackagesSectionSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getPackagesSectionFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getPackagesSectionFailure());
  }
};

export const createPackagesSection =
  (data, reset, toggleModal) => async (dispatch) => {
    try {
      dispatch(setPackagesSectionLoading());
      const response = await httpHandler.post(
        `/api/home/add-packages-section`,
        data,
      );
      if (response.data.success) {
        reset?.();
        toggleModal?.();
        dispatch(createPackagesSectionSuccess(response.data.data));
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
        dispatch(createPackagesSectionFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(createPackagesSectionFailure());
    }
  };

export const updatePackagesSection =
  (id, data, toggleModal) => async (dispatch) => {
    try {
      dispatch(setPackagesSectionLoading());
      const response = await httpHandler.post(
        `/api/home/update-packages-section/${id}`,
        data,
      );
      if (response.data.success) {
        toggleModal?.();
        dispatch(updatePackagesSectionSuccess(response.data.data));
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
        dispatch(updatePackagesSectionFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(updatePackagesSectionFailure());
    }
  };

export const deletePackagesSection = (id, onSuccess) => async (dispatch) => {
  try {
    dispatch(setPackagesSectionLoading());
    const response = await httpHandler.post(
      `/api/home/delete-packages-section/${id}`,
    );
    if (response.data.success) {
      dispatch(deletePackagesSectionSuccess());
      toast.success(response.data.message);
      onSuccess?.();
    } else {
      toast.error(response.data.message);
      dispatch(deletePackagesSectionFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(deletePackagesSectionFailure());
  }
};

/* ============================================================
   WHY SMARTLEARNER THUNKS
   ============================================================ */

export const getWhySmartLearner = () => async (dispatch) => {
  try {
    dispatch(setWhySmartLearnerLoading());
    const response = await httpHandler.get(`/api/home/why-smartlearner`);
    if (response.data.success) {
      dispatch(getWhySmartLearnerSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getWhySmartLearnerFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getWhySmartLearnerFailure());
  }
};

export const createWhySmartLearner =
  (data, reset, toggleModal) => async (dispatch) => {
    try {
      dispatch(setWhySmartLearnerLoading());
      const response = await httpHandler.post(
        `/api/home/add-why-smartlearner`,
        data,
      );
      if (response.data.success) {
        reset?.();
        toggleModal?.();
        dispatch(createWhySmartLearnerSuccess(response.data.data));
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
        dispatch(createWhySmartLearnerFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(createWhySmartLearnerFailure());
    }
  };

export const updateWhySmartLearner =
  (id, data, toggleModal) => async (dispatch) => {
    try {
      dispatch(setWhySmartLearnerLoading());
      const response = await httpHandler.post(
        `/api/home/update-why-smartlearner/${id}`,
        data,
      );
      if (response.data.success) {
        toggleModal?.();
        dispatch(updateWhySmartLearnerSuccess(response.data.data));
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
        dispatch(updateWhySmartLearnerFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(updateWhySmartLearnerFailure());
    }
  };

export const deleteWhySmartLearner = (id, onSuccess) => async (dispatch) => {
  try {
    dispatch(setWhySmartLearnerLoading());
    const response = await httpHandler.post(
      `/api/home/delete-why-smartlearner/${id}`,
    );
    if (response.data.success) {
      dispatch(deleteWhySmartLearnerSuccess());
      toast.success(response.data.message);
      onSuccess?.();
    } else {
      toast.error(response.data.message);
      dispatch(deleteWhySmartLearnerFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(deleteWhySmartLearnerFailure());
  }
};

/* ============================================================
   LOCATIONS THUNKS
   ============================================================ */

export const getLocations = () => async (dispatch) => {
  try {
    dispatch(setLocationsLoading());
    const response = await httpHandler.get(`/api/home/locations`);
    if (response.data.success) {
      dispatch(getLocationsSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getLocationsFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getLocationsFailure());
  }
};

export const createLocations =
  (data, reset, toggleModal) => async (dispatch) => {
    try {
      dispatch(setLocationsLoading());
      const response = await httpHandler.post(`/api/home/add-locations`, data);
      if (response.data.success) {
        reset?.();
        toggleModal?.();
        dispatch(createLocationsSuccess(response.data.data));
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
        dispatch(createLocationsFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(createLocationsFailure());
    }
  };

export const updateLocations = (id, data, toggleModal) => async (dispatch) => {
  try {
    dispatch(setLocationsLoading());
    const response = await httpHandler.post(
      `/api/home/update-locations/${id}`,
      data,
    );
    if (response.data.success) {
      toggleModal?.();
      dispatch(updateLocationsSuccess(response.data.data));
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
      dispatch(updateLocationsFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(updateLocationsFailure());
  }
};

export const deleteLocations = (id, onSuccess) => async (dispatch) => {
  try {
    dispatch(setLocationsLoading());
    const response = await httpHandler.post(`/api/home/delete-locations/${id}`);
    if (response.data.success) {
      dispatch(deleteLocationsSuccess());
      toast.success(response.data.message);
      onSuccess?.();
    } else {
      toast.error(response.data.message);
      dispatch(deleteLocationsFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(deleteLocationsFailure());
  }
};

/* ============================================================
   RECENT PASSES THUNKS
   ============================================================ */

export const getRecentPasses = () => async (dispatch) => {
  try {
    dispatch(setRecentPassesLoading());
    const response = await httpHandler.get(`/api/home/recent-passes`);
    if (response.data.success) {
      dispatch(getRecentPassesSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getRecentPassesFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getRecentPassesFailure());
  }
};

export const createRecentPasses =
  (data, reset, toggleModal) => async (dispatch) => {
    try {
      dispatch(setRecentPassesLoading());
      const response = await httpHandler.post(
        `/api/home/add-recent-passes`,
        data,
      );
      if (response.data.success) {
        reset?.();
        toggleModal?.();
        dispatch(createRecentPassesSuccess(response.data.data));
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
        dispatch(createRecentPassesFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(createRecentPassesFailure());
    }
  };

export const updateRecentPasses =
  (id, data, toggleModal) => async (dispatch) => {
    try {
      dispatch(setRecentPassesLoading());
      const response = await httpHandler.post(
        `/api/home/update-recent-passes/${id}`,
        data,
      );
      if (response.data.success) {
        toggleModal?.();
        dispatch(updateRecentPassesSuccess(response.data.data));
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
        dispatch(updateRecentPassesFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(updateRecentPassesFailure());
    }
  };

export const deleteRecentPasses = (id, onSuccess) => async (dispatch) => {
  try {
    dispatch(setRecentPassesLoading());
    const response = await httpHandler.post(
      `/api/home/delete-recent-passes/${id}`,
    );
    if (response.data.success) {
      dispatch(deleteRecentPassesSuccess());
      toast.success(response.data.message);
      onSuccess?.();
    } else {
      toast.error(response.data.message);
      dispatch(deleteRecentPassesFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(deleteRecentPassesFailure());
  }
};

/* ============================================================
   TESTIMONIALS THUNKS
   ============================================================ */

export const getTestimonials = () => async (dispatch) => {
  try {
    dispatch(setTestimonialsLoading());
    const response = await httpHandler.get(`/api/home/testimonials`);
    if (response.data.success) {
      dispatch(getTestimonialsSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getTestimonialsFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getTestimonialsFailure());
  }
};

export const createTestimonials =
  (data, reset, toggleModal) => async (dispatch) => {
    try {
      dispatch(setTestimonialsLoading());
      const response = await httpHandler.post(
        `/api/home/add-testimonials`,
        data,
      );
      if (response.data.success) {
        reset?.();
        toggleModal?.();
        dispatch(createTestimonialsSuccess(response.data.data));
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
        dispatch(createTestimonialsFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(createTestimonialsFailure());
    }
  };


  export const createTestimonial =
  (data, reset, toggleModal) => async (dispatch) => {
    try {
      dispatch(setTestimonialsLoading());

      const response = await httpHandler.post(
        `/api/home/add-user-testimonials`,
        data,
      );

      if (response.data.success) {
        reset?.();
        toggleModal?.();
        dispatch(createTestimonialsSuccess(response.data.data));
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
        dispatch(createTestimonialsFailure());
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      dispatch(createTestimonialsFailure());
    }
  };

export const updateTestimonials =
  (id, data, toggleModal) => async (dispatch) => {
    try {
      dispatch(setTestimonialsLoading());
      const response = await httpHandler.post(
        `/api/home/update-testimonials/${id}`,
        data,
      );
      if (response.data.success) {
        toggleModal?.();
        dispatch(updateTestimonialsSuccess(response.data.data));
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
        dispatch(updateTestimonialsFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(updateTestimonialsFailure());
    }
  };

export const deleteTestimonials = (id, onSuccess) => async (dispatch) => {
  try {
    dispatch(setTestimonialsLoading());
    const response = await httpHandler.post(
      `/api/home/delete-testimonials/${id}`,
    );
    if (response.data.success) {
      dispatch(deleteTestimonialsSuccess());
      toast.success(response.data.message);
      onSuccess?.();
    } else {
      toast.error(response.data.message);
      dispatch(deleteTestimonialsFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(deleteTestimonialsFailure());
  }
};

/* ============================================================
   CTA THUNKS
   ============================================================ */

export const getCTA = () => async (dispatch) => {
  try {
    dispatch(setCTALoading());
    const response = await httpHandler.get(`/api/home/cta`);
    if (response.data.success) {
      dispatch(getCTASuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getCTAFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getCTAFailure());
  }
};

export const createCTA = (data, reset, toggleModal) => async (dispatch) => {
  try {
    dispatch(setCTALoading());
    const response = await httpHandler.post(`/api/home/add-cta`, data);
    if (response.data.success) {
      reset?.();
      toggleModal?.();
      dispatch(createCTASuccess(response.data.data));
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
      dispatch(createCTAFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(createCTAFailure());
  }
};

export const updateCTA = (id, data, toggleModal) => async (dispatch) => {
  try {
    dispatch(setCTALoading());
    const response = await httpHandler.post(`/api/home/update-cta/${id}`, data);
    if (response.data.success) {
      toggleModal?.();
      dispatch(updateCTASuccess(response.data.data));
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
      dispatch(updateCTAFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(updateCTAFailure());
  }
};

export const deleteCTA = (id, onSuccess) => async (dispatch) => {
  try {
    dispatch(setCTALoading());
    const response = await httpHandler.post(`/api/home/delete-cta/${id}`);
    if (response.data.success) {
      dispatch(deleteCTASuccess());
      toast.success(response.data.message);
      onSuccess?.();
    } else {
      toast.error(response.data.message);
      dispatch(deleteCTAFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(deleteCTAFailure());
  }
};

/* ============================================================
   EXPORT ALL REDUCER ACTIONS
   ============================================================ */

export const {
  // Homepage
  getHomePageSuccess,
  getHomePageFailure,
  createHomeSuccess,
  createHomeFailure,
  updateHomeSuccess,
  updateHomeFailure,
  deleteHomeSuccess,
  deleteHomeFailure,

  // Banner
  getBannerSuccess,
  getBannerFailure,
  createBannerSuccess,
  createBannerFailure,
  updateBannerSuccess,
  updateBannerFailure,
  deleteBannerSuccess,
  deleteBannerFailure,

  // How It Works
  getHowItWorksSuccess,
  getHowItWorksFailure,
  createHowItWorksSuccess,
  createHowItWorksFailure,
  updateHowItWorksSuccess,
  updateHowItWorksFailure,
  deleteHowItWorksSuccess,
  deleteHowItWorksFailure,

  // Packages Section
  getPackagesSectionSuccess,
  getPackagesSectionFailure,
  createPackagesSectionSuccess,
  createPackagesSectionFailure,
  updatePackagesSectionSuccess,
  updatePackagesSectionFailure,
  deletePackagesSectionSuccess,
  deletePackagesSectionFailure,

  // Why SmartLearner
  getWhySmartLearnerSuccess,
  getWhySmartLearnerFailure,
  createWhySmartLearnerSuccess,
  createWhySmartLearnerFailure,
  updateWhySmartLearnerSuccess,
  updateWhySmartLearnerFailure,
  deleteWhySmartLearnerSuccess,
  deleteWhySmartLearnerFailure,

  // Locations
  getLocationsSuccess,
  getLocationsFailure,
  createLocationsSuccess,
  createLocationsFailure,
  updateLocationsSuccess,
  updateLocationsFailure,
  deleteLocationsSuccess,
  deleteLocationsFailure,

  // Recent Passes
  getRecentPassesSuccess,
  getRecentPassesFailure,
  createRecentPassesSuccess,
  createRecentPassesFailure,
  updateRecentPassesSuccess,
  updateRecentPassesFailure,
  deleteRecentPassesSuccess,
  deleteRecentPassesFailure,

  // Testimonials
  getTestimonialsSuccess,
  getTestimonialsFailure,
  createTestimonialsSuccess,
  createTestimonialsFailure,
  updateTestimonialsSuccess,
  updateTestimonialsFailure,
  deleteTestimonialsSuccess,
  deleteTestimonialsFailure,

  // CTA
  getCTASuccess,
  getCTAFailure,
  createCTASuccess,
  createCTAFailure,
  updateCTASuccess,
  updateCTAFailure,
  deleteCTASuccess,
  deleteCTAFailure,

  // Loading helpers
  setHomeLoading,
  setBannerLoading,
  setHowItWorksLoading,
  setPackagesSectionLoading,
  setWhySmartLearnerLoading,
  setLocationsLoading,
  setRecentPassesLoading,
  setTestimonialsLoading,
  setCTALoading,
} = homeSlice.actions;

export default homeSlice.reducer;
