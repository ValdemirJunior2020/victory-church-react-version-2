import React from "react";
import "./PrayerGroup.css"; // ✅ Import styles

const PrayerGroup = () => {
  return (
    <div className="prayer-group-container">
      <h1 className="text-center prayer-title">VWC Prayer Group</h1>

      <div className="prayer-grid">
        {/* Zoom Prayer Meeting */}
        <div className="prayer-card">
          <img src="/images/zoom-prayer.jpg" alt="Zoom Prayer" className="prayer-image" />
          <div className="prayer-content">
            <h5 className="prayer-title text-primary">Starting Feb. 27</h5>
            <p><strong>Thursdays 7:30 PM - 9 PM</strong></p>
            <p>Join our Prayer Group on <strong>Zoom</strong></p>
            <p><strong>For more info:</strong> Call/Text Carol Asbury at <strong>(561) 704-5456</strong></p>
            <p>
              <strong>Meeting ID:</strong> 842 4746 7601 <br />
              <strong>Passcode:</strong> victory
            </p>
          </div>
        </div>

        {/* Bible Verses */}
        <div className="prayer-card">
          <img src="/images/bible-verses.jpg" alt="Bible Verses" className="prayer-image" />
          <div className="prayer-content">
            <h5 className="prayer-title text-success">Do You Have Questions About Salvation?</h5>
            <p><strong>Romans 3:10</strong> - There is none righteous, no, not one.</p>
            <p><strong>Romans 3:23</strong> - For all have sinned and come short of the glory of God.</p>
            <p><strong>Romans 10:9</strong> - If you confess with your mouth the Lord Jesus, and believe in your heart that God raised Him from the dead, you will be saved.</p>
          </div>
        </div>

        {/* Victory Worship Center */}
        <div className="prayer-card">
          <img src="/images/victory.jpg" alt="Victory Worship" className="prayer-image" />
          <div className="prayer-content">
            <h5 className="prayer-title text-info">Victory Worship Center</h5>
            <p>"Moving in the Spirit" - Join us in worship and spiritual growth.</p>
            <p>For more details, visit our website or attend our services.</p>
          </div>
        </div>

        {/* Text to Give */}
        <div className="prayer-card">
          <img src="/images/text-to-give.jpg" alt="Text to Give" className="prayer-image" />
          <div className="prayer-content">
            <h5 className="prayer-title text-warning">Text to Give</h5>
            <p>Support our mission easily by texting:</p>
            <p><strong>"victoryworship"</strong> to <strong>(833) 562-3105</strong></p>
            <p>Your contributions help sustain Victory Worship Center.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerGroup;
