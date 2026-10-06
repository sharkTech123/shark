// src/pages/admin/AdminHome.jsx
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";

import {
  getHomePage,
  createBanner,
  updateBanner,
  deleteBanner,
  createHowItWorks,
  updateHowItWorks,
  deleteHowItWorks,
  createPackagesSection,
  updatePackagesSection,
  deletePackagesSection,
  createWhySmartLearner,
  updateWhySmartLearner,
  deleteWhySmartLearner,
  createLocations,
  updateLocations,
  deleteLocations,
  createRecentPasses,
  updateRecentPasses,
  deleteRecentPasses,
  createTestimonials,
  updateTestimonials,
  deleteTestimonials,
  createCTA,
  updateCTA,
  deleteCTA,
} from "../../../redux/features/homeContentSlice";

import { icons } from "../../ui/NewhomeDesign/HomeSectionConfig";
import styles from "./AdminContentHome.module.css";

const { Plus, Trash2, ArrowRight, ArrowLeft, Upload, Save } = icons;

/* ============================================================
   PAGE REGISTRY — only Home for now
   ============================================================ */
const CMS_PAGES = [
  {
    id: "home",
    name: "Home",
    description: "Landing page with banner, sections, and footer content",
    sections: [
      {
        key: "banner",
        label: "Banner / Hero",
        description: "Main hero with badge, heading, buttons, and stats",
        hasData: (s) => !!s.banner,
      },
      {
        key: "howItWorks",
        label: "How It Works",
        description: "3-step process explanation",
        hasData: (s) => !!s.howItWorks,
      },
      {
        key: "packagesSection",
        label: "Packages Section",
        description: "Heading/description for packages grid",
        hasData: (s) => !!s.packagesSection,
      },
      {
        key: "whySmartLearner",
        label: "Why SmartLearner",
        description: "Feature cards (4 items)",
        hasData: (s) => !!s.whySmartLearner,
      },
      {
        key: "locations",
        label: "Locations",
        description: "List of teaching locations",
        hasData: (s) => !!s.locations,
      },
      {
        key: "recentPasses",
        label: "Recent Passes",
        description: "Student pass photos and messages",
        hasData: (s) => !!s.recentPasses,
      },
      {
        key: "testimonials",
        label: "Testimonials",
        description: "Customer reviews with ratings",
        hasData: (s) => !!s.testimonials,
      },
      {
        key: "cta",
        label: "Call to Action",
        description: "Bottom CTA card with buttons",
        hasData: (s) => !!s.cta,
      },
    ],
  },
];

/* ============================================================
   THUNK MAP — section key → create/update/delete thunks
   ============================================================ */
const THUNK_MAP = {
  banner: { create: createBanner, update: updateBanner, delete: deleteBanner },
  howItWorks: {
    create: createHowItWorks,
    update: updateHowItWorks,
    delete: deleteHowItWorks,
  },
  packagesSection: {
    create: createPackagesSection,
    update: updatePackagesSection,
    delete: deletePackagesSection,
  },
  whySmartLearner: {
    create: createWhySmartLearner,
    update: updateWhySmartLearner,
    delete: deleteWhySmartLearner,
  },
  locations: {
    create: createLocations,
    update: updateLocations,
    delete: deleteLocations,
  },
  recentPasses: {
    create: createRecentPasses,
    update: updateRecentPasses,
    delete: deleteRecentPasses,
  },
  testimonials: {
    create: createTestimonials,
    update: updateTestimonials,
    delete: deleteTestimonials,
  },
  cta: { create: createCTA, update: updateCTA, delete: deleteCTA },
};

/* ============================================================
   FIELD SCHEMAS — defines form fields for each section
   ============================================================ */
const FIELD_SCHEMAS = {
  banner: [
    {
      name: "badge",
      label: "Badge Text",
      type: "text",
      placeholder: "Award-winning · West Midlands · Since 2004",
    },
    {
      name: "heading",
      label: "Heading",
      type: "text",
      required: true,
      placeholder: "A quieter season to learn.",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Empty roads, patient instructors...",
    },
    {
      name: "primaryButton",
      label: "Primary Button",
      type: "object",
      fields: [
        { name: "text", label: "Text", type: "text" },
        { name: "link", label: "Link", type: "text" },
      ],
    },
    {
      name: "secondaryButton",
      label: "Secondary Button",
      type: "object",
      fields: [
        { name: "text", label: "Text", type: "text" },
        { name: "link", label: "Link", type: "text" },
      ],
    },
    {
      name: "stats",
      label: "Stats (Key Numbers)",
      type: "array",
      itemFields: [
        { name: "value", label: "Value", type: "text", placeholder: "20+" },
        {
          name: "label",
          label: "Label",
          type: "text",
          placeholder: "Years operating",
        },
      ],
      defaultItem: { value: "", label: "" },
    },
    {
      name: "contactInfo",
      label: "Contact Info Card",
      type: "object",
      fields: [
        { name: "heading", label: "Heading", type: "text" },
        { name: "description", label: "Description", type: "textarea" },
      ],
    },
    {
      name: "trustItems",
      label: "Trust Items (Footer row)",
      type: "array",
      itemFields: [
        {
          name: "value",
          label: "Text",
          type: "text",
          placeholder: "DVSA-approved instructors",
        },
      ],
      defaultItem: { value: "" },
    },
  ],

  howItWorks: [
    {
      name: "label",
      label: "Eyebrow Label",
      type: "text",
      placeholder: "How it works",
    },
    { name: "heading", label: "Heading", type: "text", required: true },
    {
      name: "steps",
      label: "Steps",
      type: "array",
      itemFields: [
        { name: "number", label: "Number", type: "text", placeholder: "01" },
        { name: "heading", label: "Heading", type: "text" },
        { name: "description", label: "Description", type: "textarea" },
      ],
      defaultItem: { number: "", heading: "", description: "" },
    },
  ],

  packagesSection: [
     {
      name: "subHeading",
      label: "Eyebrow Text",
      type: "text",
      placeholder: "Our packages",
    },
    { name: "heading", label: "Heading", type: "text", required: true },
    { name: "description", label: "Description", type: "textarea" },
    {
      name: "buttonText",
      label: "Button Text",
      type: "text",
      placeholder: "See all packages →",
    },
    {
      name: "buttonLink",
      label: "Button Link",
      type: "text",
      placeholder: "/courses",
    },
    {
      name: "packages",
      label: "Package Cards",
      type: "array",
      itemFields: [
        {
          name: "category",
          label: "Category",
          type: "select",
          options: ["Automatic", "Manual", "Instructor", "Intensive"],
        },
        {
          name: "tag",
          label: "Tag (e.g. POPULAR)",
          type: "text",
          placeholder: "POPULAR",
        },
        { name: "title", label: "Title", type: "text", required: true },
        { name: "description", label: "Description", type: "textarea" },
        {
          name: "price",
          label: "Price",
          type: "text",
          placeholder: "£120",
          required: true,
        },
        {
          name: "originalPrice",
          label: "Original Price (optional)",
          type: "text",
          placeholder: "£180",
        },
        {
          name: "duration",
          label: "Duration",
          type: "text",
          placeholder: "5 hours",
        },
        {
          name: "link",
          label: "Link",
          type: "text",
          placeholder: "/courses/automatic-starter",
        },
      ],
      defaultItem: {
        category: "",
        tag: "",
        title: "",
        description: "",
        price: "",
        originalPrice: "",
        duration: "",
        link: "",
      },
    },
  ],

  whySmartLearner: [
    {
      name: "subHeading",
      label: "Eyebrow Text",
      type: "text",
      placeholder: "Why SmartLearner",
    },
    { name: "heading", label: "Heading", type: "text", required: true },
    { name: "description", label: "Description", type: "textarea" },
    {
      name: "features",
      label: "Feature Cards",
      type: "array",
      itemFields: [
        { name: "title", label: "Title", type: "text" },
        { name: "description", label: "Description", type: "textarea" },
        {
          name: "icon",
          label: "Icon",
          type: "select",
          options: [
            "Award",
            "Shield",
            "MapPin",
            "Sparkles",
            "Star",
            "Phone",
            "Clock",
          ],
        },
      ],
      defaultItem: { title: "", description: "", icon: "Award" },
    },
  ],

  locations: [
    {
      name: "subheading",
      label: "Subheading",
      type: "text",
      placeholder: "Where we teach",
    },
    { name: "heading", label: "Heading", type: "text", required: true },
    {
      name: "locations",
      label: "Locations",
      type: "array",
      itemFields: [
        { name: "name", label: "City Name", type: "text", required: true },
        { name: "subLocation", label: "Region", type: "text", required: true },
        { name: "link", label: "Link", type: "text", required: true },
      ],
      defaultItem: { name: "", subLocation: "", link: "" },
    },
  ],

  recentPasses: [
    {
      name: "subHeading",
      label: "Eyebrow Text",
      type: "text",
      placeholder: "Recent passes",
    },
    { name: "heading", label: "Heading", type: "text", required: true },
    { name: "description", label: "Description", type: "textarea" },
    {
      name: "students",
      label: "Student Cards",
      type: "array",
      itemFields: [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "location", label: "Location", type: "text" },
        { name: "message", label: "Message", type: "text" },
        { name: "image", label: "Photo", type: "image", accept: "image/*" },
      ],
      defaultItem: { name: "", location: "", message: "", image: "" },
    },
  ],

  testimonials: [
    {
      name: "subHeading",
      label: "Eyebrow Text",
      type: "text",
      placeholder: "What pupils say",
    },
    { name: "heading", label: "Heading", type: "text", required: true },
    { name: "description", label: "Description", type: "textarea" },
    {
      name: "testimonials",
      label: "Testimonials",
      type: "array",
      itemFields: [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "location", label: "Location", type: "text" },
        { name: "message", label: "Message", type: "textarea" },
        {
          name: "rating",
          label: "Rating (1-5)",
          type: "number",
          min: 1,
          max: 5,
        },
        { name: "avatar", label: "Avatar", type: "image", accept: "image/*" },
      ],
      defaultItem: {
        name: "",
        location: "",
        message: "",
        rating: 5,
        avatar: "",
      },
    },
  ],

  cta: [
    {
      name: "subHeading",
      label: "Eyebrow Text",
      type: "text",
      placeholder: "Ready to start?",
    },
    { name: "heading", label: "Heading", type: "text", required: true },
    { name: "description", label: "Description", type: "textarea" },
    {
      name: "primaryButton",
      label: "Primary Button",
      type: "object",
      fields: [
        { name: "text", label: "Text", type: "text" },
        { name: "link", label: "Link", type: "text" },
      ],
    },
    {
      name: "secondaryButton",
      label: "Secondary Button",
      type: "object",
      fields: [
        { name: "text", label: "Text", type: "text" },
        { name: "link", label: "Link", type: "text" },
      ],
    },
  ],
};


const FILE_SECTIONS = {
  recentPasses: { arrayName: "students", fileKey: "image" },
  testimonials: { arrayName: "testimonials", fileKey: "avatar" },
};


const SERVER_FIELDS = ["_id", "homeId", "createdAt", "updatedAt", "__v"];

/* ============================================================
   MAIN COMPONENT — Routes between 3 views
   ============================================================ */
export default function AdminContentHome({ pageId: pageIdProp }) {
  const { pageId: pageIdParam, sectionKey } = useParams();
  const pageId = pageIdProp || pageIdParam;
  const navigate = useNavigate();

  // No sectionKey → show sections list
  if (!sectionKey) {
    return <SectionsList pageId={pageId} />;
  }

  // Has sectionKey → show edit form
  return <EditSection pageId={pageId} sectionKey={sectionKey} />;
}

/* ============================================================
   VIEW 1: Pages List (when no pageId)
   ============================================================ */
function PagesList() {
  return (
    <div className={styles.adminPage}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1>CMS Pages</h1>
          <p>Choose a page to manage its content sections.</p>
        </div>

        <div className={styles.pagesGrid}>
          {CMS_PAGES.map((page) => (
            <Link
              key={page.id}
              to={`/admin/pages/${page.id}/sections`}
              className={styles.pageCard}
            >
              <div className={styles.pageCardInfo}>
                <h3>{page.name}</h3>
                <p>{page.description}</p>
              </div>
              <ArrowRight className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   VIEW 2: Sections List
   ============================================================ */
function SectionsList({ pageId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const page = CMS_PAGES.find((p) => p.id === pageId);
  const homeState = useSelector((s) => s.home);
  const homeLoading = useSelector((s) => s.home.homeLoading);

  useEffect(() => {
    dispatch(getHomePage());
  }, [dispatch]);

  if (!page) {
    return (
      <div className={styles.adminPage}>
        <div className={styles.container}>
          <p>Page not found.</p>
        </div>
      </div>
    );
  }

  if (homeLoading && !homeState.banner) {
    return <div className={styles.center}>Loading sections…</div>;
  }

  return (
    <div className={styles.adminPage}>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link to="/admin/home-edit-page">Pages</Link>
          <span>›</span>
          <span>{page.name}</span>
        </div>

        <div className={styles.pageHeader}>
          <h1>{page.name} Sections</h1>
          <p>Click any section to edit its content.</p>
        </div>

        <div className={styles.sectionsList}>
          {page.sections.map((section, idx) => {
            const hasData = section.hasData(homeState);
            return (
              <div key={section.key} className={styles.sectionItem}>
                <div className={styles.sectionItemInfo}>
                  <span className={styles.sectionNumber}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{section.label}</h3>
                    <p>{section.description}</p>
                  </div>
                </div>
                <Link
                  to={`/admin/home-edit-page/${section.key}`}
                  className={styles.editBtn}
                >
                  {hasData ? "Edit" : "Create"}
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   VIEW 3: Edit Section Form
   ============================================================ */
function EditSection({ pageId, sectionKey }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const page = CMS_PAGES.find((p) => p.id === pageId);
  const section = page?.sections.find((s) => s.key === sectionKey);
  const fields = FIELD_SCHEMAS[sectionKey] || [];

  const homeState = useSelector((s) => s.home);
  const homeLoading = useSelector((s) => s.home.homeLoading);
  const sectionData = homeState[sectionKey];
  const sectionLoading = useSelector((s) => s.home[`${sectionKey}Loading`]);

  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  // Load existing data into form
  useEffect(() => {
    if (sectionData) {
      // Deep clone to avoid mutating redux state
      setFormData(JSON.parse(JSON.stringify(sectionData)));
    } else {
      // Initialize empty form from schema
      const init = {};
      fields.forEach((f) => {
        if (f.type === "array") init[f.name] = [];
        else if (f.type === "object") {
          init[f.name] = {};
          f.fields.forEach((sub) => (init[f.name][sub.name] = ""));
        } else init[f.name] = "";
      });
      setFormData(init);
    }
  }, [sectionData, sectionKey]);

  if (!page || !section) {
    return <div className={styles.center}>Section not found.</div>;
  }

  if (homeLoading && !sectionData) {
    return <div className={styles.center}>Loading…</div>;
  }

  const handleFieldChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleObjectFieldChange = (objName, fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [objName]: { ...(prev[objName] || {}), [fieldName]: value },
    }));
  };

  const handleArrayItemChange = (arrayName, index, fieldName, value) => {
    setFormData((prev) => {
      const arr = [...(prev[arrayName] || [])];
      arr[index] = { ...arr[index], [fieldName]: value };
      return { ...prev, [arrayName]: arr };
    });
  };

  const handleArrayAdd = (arrayName, defaultItem) => {
    setFormData((prev) => ({
      ...prev,
      [arrayName]: [...(prev[arrayName] || []), { ...defaultItem }],
    }));
  };

  const handleArrayRemove = (arrayName, index) => {
    setFormData((prev) => ({
      ...prev,
      [arrayName]: (prev[arrayName] || []).filter((_, i) => i !== index),
    }));
  };

const handleImageChange = (arrayName, index, file) => {
  if (!file) return;
  const fileKey = FILE_SECTIONS[sectionKey]?.fileKey || "image";
  handleArrayItemChange(arrayName, index, fileKey, URL.createObjectURL(file));
  handleArrayItemChange(arrayName, index, "_file", file);
};


const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  for (const field of fields) {
    if (field.required && !formData[field.name]?.toString().trim()) {
      setError(`${field.label} is required`);
      return;
    }
  }

  const thunks = THUNK_MAP[sectionKey];
  if (!thunks) return setError("No thunk mapped for this section");

  // Strip server-managed fields
  const clean = { ...formData };
  SERVER_FIELDS.forEach((k) => delete clean[k]);

  const fileCfg = FILE_SECTIONS[sectionKey];
  let payload;

  if (fileCfg) {
    // multipart: JSON for data, files separately
    const { arrayName, fileKey } = fileCfg;
    payload = new FormData();

    Object.entries(clean).forEach(([key, value]) => {
      if (key === arrayName) return;
      payload.append(
        key,
        typeof value === "object" ? JSON.stringify(value) : value ?? "",
      );
    });

    const items = (clean[arrayName] || []).map(({ _file, ...item }) => ({
      ...item,
      [fileKey]: item[fileKey]?.startsWith("blob:") ? "" : item[fileKey] || "",
    }));
    payload.append(arrayName, JSON.stringify(items));

    (clean[arrayName] || []).forEach((item, i) => {
      if (item._file instanceof File) {
        payload.append(`${arrayName}[${i}].${fileKey}`, item._file);
      }
    });
  } else {
    // plain JSON for everything else
    payload = clean;
  }

  try {
    let result;
    if (sectionData?._id) {
      result = await dispatch(
        thunks.update(sectionData._id, payload, () =>
          navigate("/admin/home-edit-page"),
        ),
      );
      if (result?.meta?.requestStatus === "fulfilled")
        toast.success("Section updated successfully");
    } else {
      result = await dispatch(thunks.create(payload, () => {}));
      if (result?.meta?.requestStatus === "fulfilled")
        toast.success("Section created successfully");
    }
  } catch (err) {
    setError(err.message || "Failed to save section");
  }
};



  return (
    <div className={styles.adminPage}>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link to="/admin/home-edit-page">Pages</Link>
          <span>›</span>
          <Link to={`/admin/home-edit-page`}>{page.name}</Link>
          <span>›</span>
          <span>{section.label}</span>
        </div>

        <div className={styles.pageHeader}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h1>
                {sectionData ? "Edit" : "Create"} {section.label}
              </h1>
              <p>{section.description}</p>
            </div>
            <button
              type="button"
              className={styles.backBtn}
              onClick={() => navigate(`/admin/home-edit-page`)}
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
          </div>
        </div>

        {error && <div className={styles.errorMsg}>{error}</div>}

        <form className={styles.editForm} onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            {fields.map((field) => (
              <FieldRenderer
                key={field.name}
                field={field}
                value={formData[field.name]}
                onChange={(v) => handleFieldChange(field.name, v)}
                onObjectChange={(sub, v) =>
                  handleObjectFieldChange(field.name, sub, v)
                }
                onArrayItemChange={(idx, sub, v) =>
                  handleArrayItemChange(field.name, idx, sub, v)
                }
                onArrayAdd={() => handleArrayAdd(field.name, field.defaultItem)}
                onArrayRemove={(idx) => handleArrayRemove(field.name, idx)}
                onImageChange={(idx, file) =>
                  handleImageChange(field.name, idx, file)
                }
              />
            ))}
          </div>

          <div className={styles.submitBar}>
            {sectionData && (
              <button
                type="button"
                className={styles.backBtn}
                onClick={() => {
                  if (
                    window.confirm(
                      `Delete this ${section.label}? This cannot be undone.`,
                    )
                  ) {
                    dispatch(THUNK_MAP[sectionKey].delete(sectionData._id));
                    navigate(`/admin/home-edit-page`);
                  }
                }}
              >
                <Trash2 className="h-4 w-4" />
                Delete
              </button>
            )}
            <button
              type="submit"
              className={styles.saveBtn}
              disabled={sectionLoading}
            >
              <Save className="h-4 w-4" />
              {sectionLoading ? "Saving…" : sectionData ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ============================================================
   FIELD RENDERER — Recursive component for all field types
   ============================================================ */
function FieldRenderer({
  field,
  value,
  onChange,
  onObjectChange,
  onArrayItemChange,
  onArrayAdd,
  onArrayRemove,
  onImageChange,
}) {
  // SIMPLE TEXT / TEXTAREA / NUMBER / SELECT
  if (["text", "textarea", "number"].includes(field.type)) {
    return (
      <div className={styles.formField}>
        <label className={styles.formLabel}>
          {field.label}
          {field.required && <span className={styles.required}>*</span>}
        </label>
        {field.type === "textarea" ? (
          <textarea
            className={styles.formTextarea}
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            required={field.required}
          />
        ) : (
          <input
            type={field.type}
            className={styles.formInput}
            value={value || ""}
            onChange={(e) =>
              onChange(
                field.type === "number" ? +e.target.value : e.target.value,
              )
            }
            placeholder={field.placeholder}
            min={field.min}
            max={field.max}
            required={field.required}
          />
        )}
        {field.hint && <p className={styles.formHint}>{field.hint}</p>}
      </div>
    );
  }

  // SELECT (dropdown)
  if (field.type === "select") {
    return (
      <div className={styles.formField}>
        <label className={styles.formLabel}>{field.label}</label>
        <select
          className={styles.formSelect}
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">— Select —</option>
          {field.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
  }

  // IMAGE (file input + preview)
  if (field.type === "image") {
    return (
      <div className={styles.formField}>
        <label className={styles.formLabel}>{field.label}</label>
        <div className={styles.imageUpload}>
          {value ? (
            <img
  src={value.startsWith("blob:") ? value : `https://api.smartlearner.com/uploads/${value}`}
  alt="Preview"
/>
          ) : (
            <div className={styles.imagePreview} />
          )}
          <input
            type="file"
            accept={field.accept}
            className={styles.fileInput}
            onChange={(e) => onChange(e.target.files?.[0])}
          />
        </div>
      </div>
    );
  }

  // OBJECT (nested fields)
  if (field.type === "object") {
    return (
      <div className={styles.sectionDivider}>
        <h4>{field.label}</h4>
        <div className={styles.formGrid}>
          {field.fields.map((sub) => (
            <div key={sub.name} className={styles.formField}>
              <label className={styles.formLabel}>
                {sub.label}
                {sub.required && <span className={styles.required}>*</span>}
              </label>
              <input
                type="text"
                className={styles.formInput}
                value={value?.[sub.name] || ""}
                onChange={(e) => onObjectChange(sub.name, e.target.value)}
                placeholder={sub.placeholder}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ARRAY (dynamic add/remove list)
  if (field.type === "array") {
    const items = value || [];
    return (
      <div className={styles.sectionDivider}>
        <h4>{field.label}</h4>
        <div className={styles.arrayGroup}>
          {items.length === 0 && (
            <p className={styles.formHint}>
              No items yet. Click "+ Add" below.
            </p>
          )}
          {items.map((item, idx) => (
            <div key={idx} className={styles.arrayItem}>
              <div className={styles.arrayItemHeader}>
                <span>
                  {field.label.replace(/s$/, "")} #{idx + 1}
                </span>
                <button
                  type="button"
                  className={styles.removeBtn}
                  onClick={() => onArrayRemove(idx)}
                  title="Remove"
                >
                  <Trash2 className="h-3 w-3" />
                </button>
              </div>

              <div className={styles.formGrid}>
                {field.itemFields.map((sub) => (
                  <div key={sub.name} className={styles.formField}>
                    <label className={styles.formLabel}>
                      {sub.label}
                      {sub.required && (
                        <span className={styles.required}>*</span>
                      )}
                    </label>

                    {sub.type === "textarea" ? (
                      <textarea
                        className={styles.formTextarea}
                        value={item[sub.name] || ""}
                        onChange={(e) =>
                          onArrayItemChange(idx, sub.name, e.target.value)
                        }
                      />
                    ) : sub.type === "select" ? (
                      <select
                        className={styles.formSelect}
                        value={item[sub.name] || ""}
                        onChange={(e) =>
                          onArrayItemChange(idx, sub.name, e.target.value)
                        }
                      >
                        <option value="">— Select —</option>
                        {sub.options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : sub.type === "image" ? (
                      <div className={styles.imageUpload}>
                        {item[sub.name] ? (
                          <img
                            src={item[sub.name]}
                            alt="Preview"
                            className={styles.imagePreview}
                          />
                        ) : (
                          <div className={styles.imagePreview} />
                        )}
                        <input
                          type="file"
                          accept={sub.accept}
                          className={styles.fileInput}
                          onChange={(e) =>
                            onImageChange(idx, e.target.files?.[0])
                          }
                        />
                      </div>
                    ) : (
                      <input
                        type={sub.type || "text"}
                        className={styles.formInput}
                        value={item[sub.name] || ""}
                        onChange={(e) =>
                          onArrayItemChange(
                            idx,
                            sub.name,
                            sub.type === "number"
                              ? +e.target.value
                              : e.target.value,
                          )
                        }
                        min={sub.min}
                        max={sub.max}
                        placeholder={sub.placeholder}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <button type="button" className={styles.addBtn} onClick={onArrayAdd}>
            <Plus className="h-3 w-3" />
            Add {field.label.replace(/s$/, "")}
          </button>
        </div>
      </div>
    );
  }

  return null;
}

/* ============================================================
   TOP-LEVEL ROUTER
   ============================================================ */
export function AdminHomeRouter() {
  const { pageId, sectionKey } = useParams();

  // /admin/pages → PagesList
  if (!pageId) return <PagesList />;

  // /admin/pages/:pageId/sections → SectionsList
  // /admin/pages/:pageId/sections/:sectionKey → EditSection
  return (
    <AdminContentHome
      // key forces remount on route change
      key={`${pageId}-${sectionKey || ""}`}
    />
  );
}
