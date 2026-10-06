import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Models
import Home from "../models/homeModel.js";
import HomeBanner from "../models/homeBannerModel.js";
import HomeHowItWorks from "../models/homeHowItWorksModel.js";
import HomePackages from "../models/homePackagesModel.js";
import HomeWhySmartLearner from "../models/homeWhySmartLearnerModel.js";
import HomeLocations from "../models/homeLocationsModel.js";
import HomeRecentPasses from "../models/homeRecentPassesModel.js";
import HomeTestimonials from "../models/homeTestimonialsModel.js";
import HomeCTA from "../models/homeCtaModel.js";

/*
|--------------------------------------------------------------------------
| DATABASE CONNECTION
|--------------------------------------------------------------------------
*/

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://aman262020:aman262020@atlascluster.vtp8b.mongodb.net/SmartLearnerDB?retryWrites=true&w=majority&appName=AtlasCluster",
    );

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

/*
|--------------------------------------------------------------------------
| SEED DATA
|--------------------------------------------------------------------------
*/

const seedHome = async () => {
  try {
    /*
    |--------------------------------------------------------------------------
    | CLEAR OLD HOMEPAGE DATA
    |--------------------------------------------------------------------------
    */

    await Home.deleteMany({});
    await HomeBanner.deleteMany({});
    await HomeHowItWorks.deleteMany({});
    await HomePackages.deleteMany({});
    await HomeWhySmartLearner.deleteMany({});
    await HomeLocations.deleteMany({});
    await HomeRecentPasses.deleteMany({});
    await HomeTestimonials.deleteMany({});
    await HomeCTA.deleteMany({});

    /*
    |--------------------------------------------------------------------------
    | CREATE HOME
    |--------------------------------------------------------------------------
    */

    const home = await Home.create({
      name: "SmartLearner Homepage",
      slug: "home",
      isActive: true,
    });

    /*
    |--------------------------------------------------------------------------
    | BANNER
    |--------------------------------------------------------------------------
    */

    const banner = await HomeBanner.create({
      homeId: home._id,

      badge: "SmartLearner Driving School",

      heading: "Learn to drive. Your way.",

      subHeading:
        "Driving lessons across Coventry, Bedworth, Solihull, Leamington, Nuneaton, Rugby and Warwick.",

      description:
        "An independent driving school in the West Midlands. Buy a package online — we'll phone you back to arrange the rest.",

      stats: [
        {
          value: "20+",
          label: "Years operating",
        },
        {
          value: "5,000+",
          label: "Pupils passed",
        },
        {
          value: "4.9★",
          label: "Average rating",
        },
        {
          value: "7",
          label: "Local areas",
        },
      ],

      phoneTitle: "Bought a package?",

      phoneDescription:
        "We phone within one working day to arrange lessons. No calendar maths, no scheduling apps.",
      trustItems: [
        {
          value: "DVSA",
        },
      ],
    });

    /*
    |--------------------------------------------------------------------------
    | HOW IT WORKS
    |--------------------------------------------------------------------------
    */

    const howItWorks = await HomeHowItWorks.create({
      homeId: home._id,

      subHeading: "How it works",

      heading: "Three steps — and the last one is just answering the phone.",

      steps: [
        {
          number: "01",
          heading: "Pick your package",
          description:
            "Choose the driving package that suits your goals, experience and preferred transmission.",
        },
        {
          number: "02",
          heading: "Buy online",
          description: "Choose your package and complete your purchase online.",
        },
        {
          number: "03",
          heading: "Answer the phone",
          description:
            "We'll phone within one working day to arrange your lessons and get you started.",
        },
      ],
    });

    /*
    |--------------------------------------------------------------------------
    | PACKAGES SECTION
    |--------------------------------------------------------------------------
    |
    | IMPORTANT:
    | Actual packages are NOT stored here.
    | Only section heading/subHeading/description.
    |
    */

    const packages = await HomePackages.create({
      homeId: home._id,

      subHeading: "Our packages",

      heading: "Pick the way that suits you.",

      description:
        "Whether you want to take your time, hit it hard in a week, or hop into an automatic — there's a package for it.",
    });

    /*
    |--------------------------------------------------------------------------
    | WHY SMARTLEARNER
    |--------------------------------------------------------------------------
    */

    const whySmartLearner = await HomeWhySmartLearner.create({
      homeId: home._id,

      subHeading: "Why SmartLearner",

      heading: "The only driving school you'll need.",

      features: [
        {
          title: "Award-winning",

          description:
            "Voted West Midlands' best driving school multiple years running.",
        },

        {
          title: "DVSA-approved",

          description:
            "Every instructor is a fully-qualified DVSA Approved Driving Instructor.",
        },

        {
          title: "Local everywhere",

          description:
            "Seven towns and cities across the West Midlands and Warwickshire.",
        },

        {
          title: "Theory for £4.99",

          description:
            "Optional lifetime add-on — DVSA-style questions and hazard perception, one-off payment.",
        },
      ],
    });

    /*
    |--------------------------------------------------------------------------
    | LOCATIONS
    |--------------------------------------------------------------------------
    */

    /*
|--------------------------------------------------------------------------
| LOCATIONS
|--------------------------------------------------------------------------
*/

    const locations = await HomeLocations.create({
      homeId: home._id,
      subheading: "Where we teach",

      heading: "Seven local areas, one phone number.",

      isActive: true,

      locations: [
        {
          name: "Coventry",
          subLocation: "West Midlands",
          link: "/locations/coventry",
          isActive: true,
          order: 1,
        },

        {
          name: "Bedworth",
          subLocation: "Warwickshire",
          link: "/locations/bedworth",
          isActive: true,
          order: 2,
        },

        {
          name: "Solihull",
          subLocation: "West Midlands",
          link: "/locations/solihull",
          isActive: true,
          order: 3,
        },

        {
          name: "Leamington",
          subLocation: "Warwickshire",
          link: "/locations/leamington",
          isActive: true,
          order: 4,
        },

        {
          name: "Nuneaton",
          subLocation: "Warwickshire",
          link: "/locations/nuneaton",
          isActive: true,
          order: 5,
        },

        {
          name: "Rugby",
          subLocation: "Warwickshire",
          link: "/locations/rugby",
          isActive: true,
          order: 6,
        },

        {
          name: "Warwick",
          subLocation: "Warwickshire",
          link: "/locations/warwick",
          isActive: true,
          order: 7,
        },
      ],
    });

    /*
    |--------------------------------------------------------------------------
    | RECENT PASSES
    |--------------------------------------------------------------------------
    */

    const recentPasses = await HomeRecentPasses.create({
      homeId: home._id,

      subHeading: "Recent passes",

      heading: "Real pupils. Real passes.",

      description:
        "A few of the latest faces to finish with us. Want yours up here next? Browse our packages and we'll be in touch.",

      students: [
        {
          name: "Aisha K.",
          location: "Coventry",

          image: "_assets/ext001.png",

          caption: "Passed first time!",
        },

        {
          name: "Tom R.",
          location: "Bedworth",

          image: "_assets/ext002.png",

          caption: "Intensive course — passed in 10 days.",
        },

        {
          name: "Priya S.",
          location: "Solihull",

          image: "_assets/ext003.png",

          caption: "Cleared theory and practical in the same week.",
        },

        {
          name: "Daniel M.",
          location: "Leamington",

          image: "_assets/ext004.png",

          caption: "Automatic course — passed with 2 minors.",
        },
      ],
    });

    /*
    |--------------------------------------------------------------------------
    | TESTIMONIALS
    |--------------------------------------------------------------------------
    */

    const testimonials = await HomeTestimonials.create({
      homeId: home._id,

      subHeading: "Testimonials",

      heading: "What our pupils say.",

      testimonials: [
        {
          name: "Priya Shah",

          location: "Solihull",

          rating: 5,

          message:
            "The theory portal alone is worth it. Way better than the random apps I was using before.",
        },

        {
          name: "Aisha K.",

          location: "Coventry",

          rating: 5,

          message:
            "Honestly the best decision. My instructor was patient, the lessons felt structured, and I passed first time.",
        },
      ],
    });

    /*
    |--------------------------------------------------------------------------
    | CTA
    |--------------------------------------------------------------------------
    */

    const cta = await HomeCTA.create({
      homeId: home._id,

      subHeading: "Ready to get started?",

      heading: "Your licence starts with one decision.",

      description:
        "Choose a package online and we'll phone you within one working day to arrange your lessons.",

      buttonText: "Browse packages",

      buttonLink: "/courses",
    });

    /*
    |--------------------------------------------------------------------------
    | OUTPUT
    |--------------------------------------------------------------------------
    */

    console.log("");
    console.log("======================================");
    console.log(" HOMEPAGE SEED SUCCESSFUL");
    console.log("======================================");
    console.log("");

    console.log("Home ID:", home._id);
    console.log("Banner ID:", banner._id);
    console.log("How It Works ID:", howItWorks._id);
    console.log("Packages ID:", packages._id);
    console.log("Why SmartLearner ID:", whySmartLearner._id);
    console.log("Locations ID:", locations._id);
    console.log("Recent Passes ID:", recentPasses._id);
    console.log("Testimonials ID:", testimonials._id);
    console.log("CTA ID:", cta._id);

    console.log("");
    console.log("======================================");
  } catch (error) {
    console.error("SEED ERROR:", error);
  }
};

/*
|--------------------------------------------------------------------------
| RUN
|--------------------------------------------------------------------------
*/

const runSeed = async () => {
  await connectDB();

  await seedHome();

  await mongoose.connection.close();

  console.log("MongoDB connection closed");

  process.exit(0);
};

runSeed();
