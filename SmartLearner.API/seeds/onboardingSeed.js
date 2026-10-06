/**
 * Example one-off seed script.
 * Run with: node backend/seed/onboardingSeed.js
 * Adjust MONGO_URI and the actual redirect paths to match your real routes.
 */
require('dotenv').config();
const mongoose = require('mongoose');
const OnboardingNode = require('../models/OnboardingNode');

async function seed() {
  await mongoose.connect("mongodb+srv://aman262020:aman262020@atlascluster.vtp8b.mongodb.net/SmartLearnerDB?retryWrites=true&w=majority&appName=AtlasCluster");
  await OnboardingNode.deleteMany({}); // wipe only when re-seeding in dev

  // --- Root level ---
  const quizRoot = await OnboardingNode.create({
    label: 'Attempt a Quiz',
    type: 'category',
    parentId: null,
    order: 1,
  });

  const productRoot = await OnboardingNode.create({
    label: 'Buy a Product',
    type: 'category',
    parentId: null,
    order: 2,
  });

  // --- Quiz branch ---
  const PDICategory = await OnboardingNode.create({
    label: 'PDI Quizzes',
    type: 'category',
    parentId: quizRoot._id,
    order: 1,
  });
  const TheoryCategory = await OnboardingNode.create({
    label: 'Theory',
    type: 'category',
    parentId: quizRoot._id,
    order: 2,
  });

   await OnboardingNode.create({
    label: 'PDI Part One',
    type: 'quiz',
    parentId: PDICategory._id,
    redirectPath: '/part-one-theory-questions',
    order: 1,
  });
  
   await OnboardingNode.create({
    label: 'PDI Part Two',
    type: 'quiz',
    parentId: PDICategory._id,
    redirectPath: '/part-two-theory-questions',
    order: 2,
  });
   await OnboardingNode.create({
    label: 'PDI Part Three',
    type: 'quiz',
    parentId: PDICategory._id,
    redirectPath: '/part-three-theory-questions',
    order: 3,
  });

  await OnboardingNode.create({
    label: 'Theory Quizzes',
    type: 'quiz',
    parentId: TheoryCategory._id,
    redirectPath: '/Theory-Portal',
    order: 1,
  });

  // --- Product branch ---
await OnboardingNode.create({
    label: 'Manual Products',
    type: 'product',
    parentId: productRoot._id,
    redirectPath: '/manual',
    order: 1,
  });

  await OnboardingNode.create({
    label: 'Automatic Products',
    type: 'product',
    parentId: productRoot._id,
    redirectPath: '/automatic-transmisson',
    order: 2,
  });
await OnboardingNode.create({
    label: 'Intensive Products',
    type: 'product',
    parentId: productRoot._id,
    redirectPath: '/intensive',
    order: 3,
  });

  await OnboardingNode.create({
    label: 'Workshop',
    type: 'product',
    parentId: productRoot._id,
    redirectPath: '/workshop',
    order: 3,
  });
  await OnboardingNode.create({
    label: 'Theory Support Products',
    type: 'product',
    parentId: productRoot._id,
    redirectPath: '/Theory-Support/Theory-package',
    order: 3,
  });
  await OnboardingNode.create({
    label: 'Instructor Packages',
    type: 'product',
    parentId: productRoot._id,
    redirectPath: '/driving-instructor-packages/instructor-packages',
    order: 3,
  });

  console.log('Onboarding tree seeded successfully.');
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});