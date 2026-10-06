import React from "react";
import styles from "./BusinessCoaching.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BusinessCoaching() {
  const text2Ref = useRef(null);

  const splitTextPartTwo = () => {
    const firstPart = "Business Mentoring Program";
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return <>{firstLine}</>;
  };

  useEffect(() => {
    const letters = text2Ref.current.querySelectorAll("span");

    // GSAP Timeline for the text animation
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });

    tl.from(letters, {
      opacity: 0.6,
      y: 100,
      ease: "bounce.out", // Start from below
      stagger: 0.1, // Stagger the animation for each letter
      rotationX: 90, // Initial rotation effect
      transformOrigin: "bottom center", // Center for rotation
      scale: 0.5,
    })
      .to(letters, {
        scale: 1, // Scale to normal size
        opacity: 1, // Fade in to full opacity
        rotationX: 0, // Reset rotation
        y: 0, // Move to original position
        stagger: 0.1, // Slight stagger for each letter
        duration: 0.8, // Smooth transition duration
      })
      .to(letters, {
        color: "#FF5733", // Change text color to red
        rotationY: 360, // Apply rotation on the Y-axis
        stagger: 0.1,
        duration: 1, // Rotate each letter over 1 second
      })
      .to(letters, {
        scale: 1.2, // Slightly enlarge text
        opacity: 0.8, // Reduce opacity slightly
        rotationX: -10, // Slight tilt effect
        stagger: 0.1, // Stagger the scaling
        duration: 1, // Animation duration
      })
      .to(letters, {
        scale: 1, // Return to original scale
        opacity: 1, // Full opacity
        rotationX: 0, // Reset rotation
        color: "#04fad4", // Reset color to black
        stagger: 0.1, // Maintain stagger effect
        duration: 1, // Final duration
      })
      .to(letters, {
        rotation: 10, // Add shake effect
        x: -5, // Horizontal shake
        yoyo: true, // Yoyo effect for shake (goes back and forth)
        repeat: 2, // Repeat the shake twice
        duration: 0.1, // Short shake duration
        stagger: 0.05, // Stagger shake on each letter
      })
      .to(letters, {
        scale: 1.3, // Increase size slightly for bounce effect
        opacity: 1, // Ensure opacity stays full
        ease: "bounce.out", // Bounce easing for effect
        stagger: 0.05, // Stagger bounce
        duration: 1, // Bounce duration
      })
      .to(letters, {
        scale: 1, // Reset scale
        opacity: 1, // Reset opacity
        y: -30, // Vertical movement for final bounce
        duration: 0.5, // Short duration for final bounce
      })
      // Infinite color change with loop
      .to(letters, {
        color: "#FF1493", // Change color to a pinkish hue
        duration: 2, // Duration of color change
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse color change for alternating effect
        stagger: 0.1,
      });
  }, []);

  return (
    <div>
      <div className={styles.BusinessCoachingComponent}>
        {/* Header Section */}

        <div className={styles.cbdbanner}>
          <h2 ref={text2Ref}>{splitTextPartTwo()}</h2>
        </div>
        {/* Introduction Section */}
        <section className={styles.Bsheader}>
          <h2>Introduction</h2>
          <p>
            Transform your driving school business with our exclusive six-month
            coaching program designed specifically for driving school owners and
            entrepreneurs. Whether you're starting a new driving school or
            looking to expand your existing business, this comprehensive program
            combines expert guidance with practical tools to help you navigate
            the road to success.
          </p>
          <p>
            Our program addresses the unique challenges faced by driving school
            owners, from operational efficiency to strategic growth. Through
            monthly one-on-one coaching sessions and ongoing support, you'll
            gain the knowledge, skills, and confidence to build a thriving
            driving school business.
          </p>
        </section>

        {/* Program Overview Section */}
        <section className={styles.BsCsection}>
          <h2>Program Overview</h2>
          <p>
            <strong>Duration:</strong> 6 months
          </p>
          <p>
            <strong>Format:</strong> Monthly 2-hour online sessions + phone
            support
          </p>
          <p>
            <strong>Focus:</strong> Business development and expansion for
            driving schools
          </p>
          <p>
            <strong>Cost:</strong> £600
          </p>
        </section>

        {/* Month 1 Details */}
        <section className={styles.BsCsection}>
          <h2>Month 1: Foundation & Business Planning</h2>
          <h3>Session Content (2 hours):</h3>
          <ul>
            <li>Industry analysis and market positioning</li>
            <li>Defining your unique value proposition</li>
            <li>Creating a comprehensive business plan</li>
            <ul>
              <li>Executive summary</li>
              <li>Company description</li>
              <li>Market analysis</li>
              <li>Organization structure</li>
              <li>Service descriptions</li>
              <li>Marketing strategy</li>
              <li>Financial projections</li>
            </ul>
          </ul>
          <h3>Support Activities:</h3>
          <ul>
            <li>Business plan template provision</li>
            <li>One-on-one review of draft business plan</li>
            <li>Competition analysis worksheet</li>
          </ul>
        </section>

        {/* Month 2 Details */}
        <section className={styles.BsCsection}>
          <h2>Month 2: Financial Management & Forecasting</h2>
          <h3>Session Content (2 hours):</h3>
          <ul>
            <li>Understanding key financial metrics</li>
            <li>Creating realistic financial projections</li>
            <li>Pricing strategy development</li>
            <ul>
              <li>Lesson pricing</li>
              <li>Package deals</li>
              <li>Special promotions</li>
            </ul>
            <li>Investment planning for vehicle fleet</li>
            <li>Insurance and liability considerations</li>
          </ul>
          <h3>Support Activities:</h3>
          <ul>
            <li>Financial projection spreadsheet templates</li>
            <li>ROI calculator for vehicle investments</li>
            <li>Pricing strategy worksheet</li>
          </ul>
        </section>

        {/* Month 3 Details */}
        <section className={styles.BsCsection}>
          <h2>Month 3: Cash Flow Management</h2>
          <h3>Session Content (2 hours):</h3>
          <ul>
            <li>Setting up effective accounting systems</li>
            <li>Managing operational expenses</li>
            <li>Cash flow forecasting and management</li>
            <li>Working capital optimization</li>
            <li>Payment processing systems</li>
            <li>Managing seasonal fluctuations</li>
          </ul>
          <h3>Support Activities:</h3>
          <ul>
            <li>Cash flow tracking templates</li>
            <li>Expense management tools</li>
            <li>Vendor payment scheduling system</li>
          </ul>
        </section>

        {/* Month 4 Details */}
        <section className={styles.BsCsection}>
          <h2>Month 4: Marketing Strategy & Implementation</h2>
          <h3>Session Content (2 hours):</h3>
          <ul>
            <li>Digital marketing essentials</li>
            <ul>
              <li>Website optimization</li>
              <li>Social media presence</li>
              <li>Online reviews management</li>
            </ul>
            <li>Local marketing strategies</li>
            <ul>
              <li>Partnerships with schools</li>
              <li>Community engagement</li>
              <li>Referral programs</li>
            </ul>
            <li>Brand development</li>
          </ul>
          <h3>Support Activities:</h3>
          <ul>
            <li>Marketing calendar template</li>
            <li>Social media content planner</li>
            <li>Local partnership outreach templates</li>
          </ul>
        </section>

        {/* Month 5 Details */}
        <section className={styles.BsCsection}>
          <h2>Month 5: Operations & Growth</h2>
          <h3>Session Content (2 hours):</h3>
          <ul>
            <li>Instructor recruitment and training</li>
            <li>Vehicle fleet management</li>
            <li>Scheduling system optimization</li>
            <li>Quality control measures</li>
            <li>Customer service excellence</li>
            <li>Expansion planning</li>
          </ul>
          <h3>Support Activities:</h3>
          <ul>
            <li>Instructor evaluation forms</li>
            <li>Vehicle maintenance schedules</li>
            <li>Customer feedback templates</li>
          </ul>
        </section>

        {/* Month 6 Details */}
        <section className={styles.BsCsection}>
          <h2>Month 6: Scale & Sustainability</h2>
          <h3>Session Content (2 hours):</h3>
          <ul>
            <li>Business growth strategies</li>
            <li>Multiple location management</li>
            <li>Franchise opportunities</li>
            <li>Success metrics and KPIs</li>
            <li>Long-term sustainability planning</li>
            <li>Exit strategy planning</li>
          </ul>
          <h3>Support Activities:</h3>
          <ul>
            <li>Growth planning worksheet</li>
            <li>KPI tracking dashboard</li>
            <li>Action plan template</li>
          </ul>
        </section>

        {/* Ongoing Support Features */}
        <section className={styles.BsCsection}>
          <h2>Ongoing Support Features</h2>
          <ul>
            <li>Monthly phone check-ins</li>
            <li>Email support for urgent questions</li>
            <li>Access to resource library</li>
            <li>Templates and tools</li>
            <li>Network of driving school owners</li>
          </ul>
        </section>

        {/* Program Deliverables */}
        <section className={styles.BsCsection}>
          <h2>Program Deliverables</h2>
          <ul>
            <li>Customised business plan</li>
            <li>Financial projection models</li>
            <li>Cash flow management system</li>
            <li>Marketing strategy document</li>
            <li>Operations manual</li>
            <li>Growth strategy roadmap</li>
          </ul>
        </section>

        {/* Success Metrics */}
        <section className={styles.BsCsection}>
          <h2>Success Metrics</h2>
          <ul>
            <li>Revenue growth targets</li>
            <li>Student enrollment increases</li>
            <li>Profit margin improvements</li>
            <li>Market share expansion</li>
            <li>Customer satisfaction scores</li>
            <li>Instructor retention rates</li>
          </ul>
        </section>

        {/* Book Now Section */}
        <section className={styles.BsCbookNow}>
          <h2>Book Your Spot Now!</h2>
          <a href="https://buy.stripe.com/8wMeXeeMB5U71Co9AK">
            {" "}
            <button className={styles.BsCbutton}>Book Now</button>
          </a>
        </section>
      </div>
    </div>
  );
}
