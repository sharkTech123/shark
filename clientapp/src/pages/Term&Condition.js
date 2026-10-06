// src/components/TermsAndConditions.js
import React from "react";
import styles from "./css/TermsAndConditions.module.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

const TermsAndConditions = () => {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "TERMS AND CONDITIONS"; // First part before "Driving"

    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return <>{firstLine}</>;
  };

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");

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
        stagger: 0.1, // Stagger the color change for each letter
      });
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Terms and Conditions – SmartLearner</title>
        <link
          rel="canonical"
          href="https://smartlearner.com/term-and-condition"
        />
        <meta
          name="description"
          content="Read the full terms and conditions for using SmartLearner’s services, including policies on bookings, payments, cancellations, and responsibilities. Stay informed and protected."
        />
      </Helmet>

      <div className={styles.Tccontainer}>
        <div className={styles.TcHomeBanner}>
          <div className={styles.opicity}></div>
          <section>
            <div className={styles.Tcheader}>
              <h2 ref={textRef}>{splitText()}</h2>
            </div>
          </section>
        </div>

        <div className={styles.TcContentSection}>
          <section className={styles.TcintroHeading}>
            <p className={styles.Tcintro}>
              Welcome to our Terms and Conditions page. Please read these terms
              carefully before using our service.
            </p>
          </section>
          <section className={styles.tcBoxes}>
            <h2 className={styles.Tcsubtitle}>
              1. Interpretation and application
            </h2>
            <ul>
              <li>
                In these terms and conditions (the “Conditions”) “We”, “Us” or
                “Our” means Smart Learner Ltd – smartlearner.com
              </li>
              <li>“You” or “Your” means you the customer.</li>
              <li>
                You must read these Conditions in full as they set out the
                complete terms upon which We have agreed to provide and You have
                agreed to obtain driving lesson tuition from Us.
              </li>
              <li>
                We and Your Driving Instructor reserve the right to charge for
                any lessons affected by Your failure to comply with any of these
                Conditions.
              </li>
            </ul>
          </section>
          <section className={styles.tcBoxes}>
            <h2 className={styles.Tcsubtitle}>
              2. Driving Lesson Tuition with SmartLearner driving School
            </h2>
            <ul>
              <li>
                Smart Learner Ltd offer driving lesson tuition with a
                SmartLearner Instructor (“Your Driving Instructor”).
              </li>
            </ul>
          </section>
          <section className={styles.tcBoxes}>
            <h2 className={styles.Tcsubtitle}>3. Your Driving Instructor</h2>
            <ul>
              <li>
                Your Driving Instructor is one of Our self-employed franchisees
                whose relationship with Us is governed by a franchise agreement.
                No contractual liability shall arise or subsist between You and
                Us. This includes all lesson payments made directly to us or
                directly to your driving instructor. We will endeavour to assist
                You with Your requirements. All of Our Driving Instructors are
                licensed to carry on business as driving instructors and have
                obtained such licences from the Driving Standards Agency, which
                is an executive agency of the Department for Transport.
              </li>
            </ul>
          </section>
          <section className={styles.tcBoxes}>
            <h2 className={styles.Tcsubtitle}>4. Lesson Tuition</h2>
            <ul>
              <li>
                Lesson Tuition is only available to persons who meet the
                following criteria:
              </li>
              <li>
                Aged 17 or over (or aged 16 if in receipt of the higher rate
                element of the disability living allowance)
              </li>
              <li>
                Who hold a valid UK provisional driving licence (“Licence”)
              </li>
              <li>Who are legally entitled to drive in the UK.</li>
              <li>Your responsibilities</li>
              <li>
                It is Your responsibility to ensure that You have the
                appropriate Licence and the Licence must be presented to Your
                Driving Instructor prior to the commencement of Your tuition.
              </li>
              <li>
                Your Instructor reserves the right to refuse to provide You with
                lesson tuition or to cancel any lessons You have agreed to or
                booked, without liability, if You fail to provide him/her with
                the Licence prior to Your first lesson.
              </li>
              <li>
                Your lesson tuition is governed by a contract between You and
                Your Instructor. Accordingly, You and Your Instructor are
                responsible for arranging the date, time, pick-up location and
                duration of Your lessons..
              </li>
              <li>
                You will treat Your Instructor with respect and follow Your
                Instructor’s reasonable instructions, particularly with regard
                to matters affecting Your health and safety or the health and
                safety of others.
              </li>
              <li>Your Driving Instructors responsibility</li>
              <li>
                3.1-Provide You with lesson tuition at the hourly rate
                communicated to You from time to time.
              </li>
              <li>
                3.2-Recommend what are, in their opinion, the most appropriate
                training methods and aids to help You study for Your theory and
                hazard perception test.
              </li>
              <li>
                3.3-Design a course of lessons to match Your specific driving
                and learning needs from Your first lesson right through to Your
                practical test.
              </li>
              <li>
                3.4-Provide You with lessons which will last one hour or such
                other duration as You and Your Instructor will agree in advance.
              </li>
              <li>
                3.5. Provide a presentable, modern, properly maintained and
                dual-controlled Smart Learner branded car for each lesson.
              </li>
              <li>
                3.6. Recommend, where appropriate, advanced courses to help you
                develop your skills for motorway driving, driving in extreme
                weather conditions, and Pass Plus.
              </li>
              <li>
                3.7. Give you relevant feedback during your lesson and record
                your development in your driving track record at the end of each
                lesson.
              </li>
              <li>
                3.8. Monitor your progress, advise and recommend what is, in
                their opinion, the appropriate time to book your mock practical
                test and, once it has been agreed between you both, apply for
                your practical driving test and, where required, they will
                advise whether it should be subsequently rescheduled.
              </li>
              <li>
                3.9. Provide training on a one-to-one basis with no other
                learner in the car.
              </li>
              <li>
                3.10. Honour the full time booked for each lesson, which should
                include an introduction, practical training, and a debrief at
                the end of your lesson.
              </li>
              <li>
                3.11. At all times conduct themselves in a professional manner
                including: being courteous and considerate to you, avoiding
                physical contact except in an emergency, not smoking during your
                lessons, and restricting mobile phone use to emergencies or for
                your benefit.
              </li>
              <li>
                3.12. Reserve the right to cancel a lesson or finish a lesson
                early on grounds of road safety.
              </li>
              <li>
                3.13. Not discriminate against you and will always abide by the
                law.
              </li>
              <li>
                3.14. Endeavour to be on time at the agreed pick-up point and be
                available for the full duration of the lesson booking, subject
                to any circumstances beyond their control.
              </li>
              <li>
                3.15. Endeavour to give you two working days’ notice (excluding
                Bank Holidays) should a lesson need to be rescheduled.
              </li>
              <li>
                3.16. Respond professionally to any worries or issues that you
                may have and try to resolve them to your satisfaction. If
                requested, they will give you the name of the Manager to whom
                you can refer the matter.
              </li>
              <li>
                3.17. If your Driving Instructor is for whatever reason unable
                to comply with their obligations to you, both we and your
                Driving Instructor reserve the right to arrange for an
                alternative Smart Learner Instructor to provide you with some or
                all of your driving tuition. We will use our best endeavours to
                notify you or the alternative instructor who will provide you
                with your lesson tuition. If we or your Instructor are unable to
                arrange for an alternative Instructor to provide your lesson
                tuition, or in the event of a mechanical breakdown of the
                vehicle in which you have been learning to drive, or for any
                other reason, the Instructor reserves the right to rearrange
                your lessons for a time convenient to both you and the
                Instructor.
              </li>
            </ul>
          </section>
          <section className={styles.tcBoxes}>
            <h2 className={styles.Tcsubtitle}>5. Lesson Cancellation Policy</h2>
            <ul>
              <li>
                You must give us or your instructor at least one working days
                notice (excluding Saturdays, Sundays and Bank Holidays) (the
                “Minimum Notice”) if You wish to cancel or rearrange a driving
                or theory lesson, otherwise you will be liable to pay for 100%
                of the lesson fee.
              </li>
              <li>
                Where You have pre-paid for any lesson but fail to attend or
                provide the Minimum Notice to cancel or rearrange the lesson, it
                will be counted as a lesson taken for the purposes of the lesson
                cancellation policy and You will be liable for the lesson fee.
              </li>
              <li>
                You will not be able to sell or transfer any driving lessons
                which You have pre-paid for to any third party, without
                obtaining Our prior written consent.
              </li>
            </ul>
          </section>
          <section className={styles.tcBoxes}>
            <h2 className={styles.Tcsubtitle}>
              5.1 SmartLearner Intensive Course Terms and Conditions
            </h2>
            <ul>
              <li>
                During your call with our representative, SmartLearner will have
                made indicative recommendations based on the information
                supplied by you. At no point can SmartLearner be held
                accountable as this is not definitive and is subject to the
                progression made and evaluation of your assigned instructor.
              </li>
              <li>
                Your evaluation will be conducted through a series of mock
                examinations, which are in accordance with DVSA test standards.
                In the eventuality of you failing to meet the requirements of
                these test standards, our instructor will have the right to
                refuse use of his/her vehicle for the purpose of your test.
              </li>
              <li>
                Throughout the duration of your intensive course with
                SmartLearner, your instructor will keep you informed of your
                progress and additional requirements you may require to ensure
                your test readiness.
              </li>
              <li>
                The intensive course is only refundable up to seven days prior
                to your start date (this being your first date of your lesson).
              </li>
              <li>
                Your booked lessons are not protected by our usual cancellation
                policy; if you need to cancel or rearrange any lessons, the
                hours will be lost.
              </li>
            </ul>
          </section>
          <section className={styles.tcBoxes}>
            <h2 className={styles.Tcsubtitle}>6. Insurance</h2>
            <ul>
              <li>
                Your Instructor will carry the appropriate motor insurance and
                be able to provide such documentation, should You be involved in
                an accident, whilst under the supervision of Your Instructor.
              </li>
            </ul>
          </section>
          <section className={styles.tcBoxes}>
            <h2 className={styles.Tcsubtitle}>7. Price Changes</h2>
            <ul>
              <li>
                We reserve the right to change the price of all Our learner
                driver products including all Lessons, at any time.
              </li>
            </ul>
          </section>
          <section className={styles.tcBoxes}>
            <h2 className={styles.Tcsubtitle}>8. Non-Block Booked Tuition</h2>
            <ul>
              <li>
                The price of lessons that have not been pre-paid may be changed
                at any time. You will receive prior notice of any price
                increases.
              </li>
            </ul>
          </section>
          <section className={styles.tcBoxes}>
            <h2 className={styles.Tcsubtitle}>9. Block Booked Tuition</h2>
            <ul>
              <li>
                The cost of Block Booked tuition is based on the lesson price in
                force at the time that the booking is made and will be honoured
                for a period of 6 months from the date of the booking. We
                reserve the right to increase the price of any unused tuition
                time.
              </li>
            </ul>
          </section>
          <section className={styles.tcBoxes}>
            <h2 className={styles.Tcsubtitle}>10. Special Offers & Packages</h2>
            <ul>
              <li>
                We reserve the right to introduce and withdraw offers regarding
                our driving tuition and other products at any time.
              </li>
              <li>
                Offers will not affect the price of Block Bookings unless
                explicitly stated.
              </li>
              <li>
                Terms and conditions apply to special offers published on{" "}
                <a href="https://smartlearner.com" target="_blank">
                  smartlearner.com
                </a>{" "}
                or in any advertising leaflet or publication.
              </li>
              <li>
                Only one offer can be applied at any time; no offer combinations
                exist.
              </li>
              <li>
                The 5 lesson offer consists of 3 lessons at the beginning and 2
                lessons during the week of your test, with normal lesson rates
                charged in between.
              </li>
              <li>
                This block is non-refundable and only instructor transferable.
              </li>
              <li>
                All lessons must be taken consecutively, with no longer than a
                2-week interval between them.
              </li>
              <li>
                The offer does not apply to individuals who book a test without
                the instructor's prior knowledge.
              </li>
            </ul>
          </section>
          <section className={styles.tcBoxes}>
            <h2 className={styles.Tcsubtitle}>11. Payment</h2>
            <ul>
              <li>
                payment via credit or debit card by telephoning 0800 118 2001
              </li>
              <li>
                payment via credit or debit card online at smartlearner.com
              </li>
              <li>
                payment via Building Society cheque made payable to Your
                Instructors agent “Smart learner” (“Agent”).
              </li>
              <li>
                We the agent will only accept Building Society cheque’s no other
                forms of cheque will be taken. You may be able to pay via a
                normal cheque direct to Your instructor with prior agreement
                only. It is the instructors right to refuse this method of
                payment at any time. The cheque must be paid in advance for
                future lessons and not for the lesson on that day.
              </li>
              <li>
                You may send your cheque’s to the following address or give them
                to your instructor. You must allow 3 working days from Us
                receiving Your cheque for it to show in Your account.
              </li>
              <li>
                An online processing/booking fee of 2.5% is payable for any lesson
                package purchased via credit or debit card. We charge this fee
                to administer the booking process on your behalf between you and
                your instructor and to contribute to the cost of administering
                your funds. This fee is non-refundable.
              </li>
            </ul>
          </section>
          <section className={styles.tcBoxes}>
            <h2 className={styles.Tcsubtitle}>Customer Care</h2>
            <ul>
              <li>SmartLearner Limited</li>
              <li>4 WHEELWRIGHT BUILDINGS,</li>
              <li>HEN LANE, CV6 4LB, COVENTRY</li>
            </ul>
          </section>
          <section className={styles.tcBoxes}>
            <h2 className={styles.Tcsubtitle}>12. Acknowledgement</h2>
            <ul>
              <li>
                Where You make any payments and the Instructor fails to pass on
                such payments to Us, We will not be liable for any shortfalls in
                such payments or any missing payments or any other failure on
                the part of the Instructors to forward such payments on to Us
                and You acknowledge that You will at all times be liable for any
                payments that remain outstanding to Us.
              </li>
              <li>
                Further, You acknowledge that it is Your responsibility to ask
                for and to obtain appropriate receipts or other proofs, in
                relation to all payments You make to Your Instructor or any of
                Our Instructors. Where We are able to, We will endeavour to
                assist with any discrepancies in payments You have made without
                ever accepting liability for the same. Subject to You having
                sufficient funds, all online payments that You make will be
                shown on Your account within 48 hours of being made.
              </li>
              <li>
                We do not accept responsibility or liability for any payments
                however made, being lost, delayed, misappropriated, rejected,
                tampered with, being short of the required amount or any
                overpayment on Your part. It is Your responsibility to ensure
                that You have sufficient funds to make all payments to Us and to
                ensure that You have paid Us the correct amount.
              </li>
              <li>
                By Utilising our test booking service, you acknowledge and agree
                that SmartLearner may use the details provided on your
                provisional license to facilitate the reservation of a test
                date, thereby reducing your wait time.&nbsp;&nbsp;
              </li>
            </ul>
          </section>
          <section className={styles.tcBoxes}>
            <h2 className={styles.Tcsubtitle}>9. Block Booked Tuition</h2>
            <ul>
              <li>Lesson Tuition</li>
              <li>
                You are entitled to cancel Your lesson tuition up to 7 days
                following the date of commitment (“Booking Date”) or otherwise
                in accordance with the Distance Selling Regulations 2000 (the
                “Regulations”). If You have not taken any lesson(s) within the
                first 7 days of the Booking Date You will be entitled to a full
                refund of any amounts paid, subject to deduction of the Refund
                Charge (clause 13.1.4)
              </li>
              <li>
                If You have completed a lesson or lessons, we are unable to
                address any refund after the 7-day cooling-off period.
              </li>
              <li>
                No reimbursement or extension of lesson use is applicable if six
                months have elapsed since your last lesson.
              </li>
              <li>
                Block Package Discounts are applicable upon successful
                completion of the entire lesson block as specified. To maintain
                discounted rates, the entire block must be completed;
                termination results in individual lessons being charged at the
                full hourly rate, and any remaining balance will be honored if
                eligible through our refund policy.
              </li>
              <li>
                Where it is possible to do so, and We agree to refund You any
                amounts, We will do so using the same method You used when You
                made the payment. If for any reason We are unable to refund You
                using the same method with which You paid, We reserve the right
                to refund You by any other method We deem appropriate.
              </li>
              <li>
                We may request additional information from You to confirm Your
                identity in order to comply with the Money Laundering
                Regulations 2007. We will also use this information to ensure
                adherence to Our Merchant Operating Instructions for card
                collection facilities.
              </li>
              <li>
                Refunds may take up to 21 working days to reach You or Your
                account.
              </li>

              <li>
                Gift Vouchers – Vouchers must be used within twelve months of
                purchase and are non refundable.
              </li>
            </ul>
          </section>
          <section className={styles.tcBoxes}>
            <h2 className={styles.Tcsubtitle}>14. Limitation of Liability</h2>
            <ul>
              <li>
                We have, or shall have no liability to You in relation to any
                injury, loss or damage arising from the use of the tuition
                vehicle or from the facts or omissions of Your Instructor or any
                other one of Our Instructors.
              </li>
              <li>
                We will not in any event be liable for any losses relating to
                any business interests that You may have including but not
                limited to loss of profits, business, loss of opportunity or any
                business interruptions or delays that You may incur. This does
                not apply to any claim You may have for personal injury or death
                and nothing in these Conditions will affect Your statutory
                rights.
              </li>
              <li>
                We do not guarantee to provide or procure the provision of any
                of the services referred to in these Conditions if We are
                prevented from doing so in circumstances beyond Our reasonable
                control, including without limitations, the activities of civil
                government authorities, third party industrial disputes,
                internal industrial disputes where We have taken reasonable
                steps to prevent the effects of such action on any of the
                services set out in these Conditions but have been unable to do
                so; acts of God, or severe weather conditions We reserve the
                right to make reasonable changes to the services referred to in
                these Conditions and to these Conditions for any reason We deem
                necessary.
              </li>
              <li>
                Where We do make any such changes, We will give You reasonable
                notice of the changes. If as a direct result of such changes the
                services We provide to You are substantially varied to Your
                detriment, and where We are satisfied with the same, You may
                cancel Your agreement with Us by giving not less than 30 days’
                notice in writing to Our address below.
              </li>
              <li>
                Any refunds that You may be entitled to will be dealt with in
                accordance with Our Refund Policy set out above. If any
                provision of these Conditions is found by any court, tribunal or
                administrative body of competent jurisdiction to be wholly or
                partly illegal, invalid, void, voidable, unenforceable or
                unreasonable it shall to the extent of such illegality,
                invalidity, voidness, voidability, unenforceability or
                unreasonableness, be deemed severable and the remaining
                provisions of these Conditions shall continue in full force and
                effect.
              </li>
              <li>
                Informing You about Products and Services. If You decide You do
                not wish to receive such information, please inform Us, but be
                aware that this will prevent You from receiving Our special
                offers and/or promotions.
              </li>
            </ul>
          </section>
          <section className={styles.tcBoxes}>
            <h2 className={styles.Tcsubtitle}>15. Data Protection</h2>
            <ul>
              <li>
                For the purposes of the Data Protection Act 1998, the data
                controller in relation to the information You supply is Smart
                Learner Ltd
              </li>
              <li>
                We may use the information You provide for administration,
                marketing, customer services and profiling Your purchasing
                preferences. When You give Us information about another person,
                You confirm that they have authorised You to act for them, to
                consent to the processing and use of their personal data in the
                manner described in this notice and to receive on their behalf
                any data protection notice.
              </li>
              <li>
                You have the right to ask for a copy of Your information (for
                which We will charge a reasonable fee to cover Our
                administration costs) and to correct any inaccuracies contained
                therein.
              </li>
              <li>
                We do not store credit/debit card details nor do we share
                customer details with any 3rd parties.
              </li>
            </ul>
          </section>
          <section className={styles.tcBoxes}>
            <h2 className={styles.Tcsubtitle}>16. Complaints</h2>
            <ul>
              <li>
                If You have any concerns or complaints about any part of Your
                driving tuition which cannot be resolved with Your Instructor,
                please contact the Business Manager. Email at{" "}
                <a href="help@smartlearner.com">admin@smartlearner.com</a> or
                free phone 0800 118 2001 or in writing to:Customer Care
                SmartLearner Limited Kingsford House Kingsford Road Coventry CV6
                3LP.
              </li>
              <li>
                Any details which you provide to us from which we can identify
                you are held and processed in accordance with our Privacy Policy
                These terms are governed by the laws of England and Wales and
                any disputes will be decided only by the Courts of England and
                Wales.
              </li>
            </ul>
            <p class="text-danger">
              *{" "}
              <strong>
                To ensure quality of service calls may be recorded and
                monitored*
              </strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
