// utils/cronJob.js
const cron = require('node-cron');
const UserSubscriptionService = require("../services/userSubscriptionService");

// Schedule cron job to check expired subscriptions every day at midnight
const cronJob = cron.schedule('0 0 * * *', async () => {
  try {
    await UserSubscriptionService.deactivateExpiredSubscriptions();
  } catch (error) {
    console.error('Error in cron job:', error);
  }
});

cronJob.start();
