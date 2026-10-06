// src/pages/admin/AdminCoursePage.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";

import {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../../../../redux/features/manualCoursePageSlice";

import { icons } from "../../../../components/ui/NewhomeDesign/HomeSectionConfig"; // reuse existing icon set (Plus, Trash2, ArrowRight, ArrowLeft, Save)
import styles from "../../AdminContentPages/AdminContentHome.module.css"; // shares the same admin visual language as Home CMS

const { Plus, Trash2, ArrowRight, ArrowLeft, Save } = icons;

/* ============================================================
   FIELD SCHEMA — every field on a course page
   ============================================================ */
const COURSE_FIELDS = [
    // {
    //   name: "slug",
    //   label: "Slug (URL path, e.g. manual-beginner)",
    //   type: "text",
    //   required: true,
    //   placeholder: "manual-beginner",
    //   hint: "Used in the page URL. Cannot easily be changed once linked elsewhere.",
    // },
  {
    name: "category",
    label: "Category Pill",
    type: "select",
    options: [
      "Automatic",
      "Manual",
      "Instructor",
      "Intensive",
      "Theory",
      "Simulator",
      "Workshop",
    ],
  },
  { name: "title", label: "Title", type: "text", required: true },
  { name: "description", label: "Description", type: "textarea" },

  {
    name: "includesLabel",
    label: "Includes Eyebrow Label",
    type: "text",
    placeholder: "What's included",
  },
  {
    name: "includes",
    label: "What's Included (checklist)",
    type: "stringArray",
    placeholder: "e.g. Door-to-door pickup",
  },

  {
    name: "infoCards",
    label: "Info Cards (Duration / Cover / Refundable etc.)",
    type: "array",
    itemFields: [
      {
        name: "icon",
        label: "Icon",
        type: "select",
        options: [
          "Clock",
          "ShieldCheck",
          "CircleCheck",
          "Award",
          "Star",
          "MapPin",
        ],
      },
      { name: "label", label: "Label", type: "text", placeholder: "Duration" },
      { name: "value", label: "Value", type: "text", placeholder: "5 hours" },
    ],
    defaultItem: { icon: "Clock", label: "", value: "" },
  },

//   {
//     name: "price",
//     label: "Price",
//     type: "text",
//     required: true,
//     placeholder: "£90",
//   },
//   {
//     name: "originalPrice",
//     label: "Original Price (optional)",
//     type: "text",
//     placeholder: "£190",
//   },
//   {
//     name: "savingsBadge",
//     label: "Savings Badge (optional)",
//     type: "text",
//     placeholder: "Save £100",
//   },
//   {
//     name: "productId",
//     label: "Product ID (cart)",
//     type: "text",
//     placeholder: "Leave blank",
//     hint: "Leave blank — the storefront's existing product data fills this in automatically at render time.",
//   },
//   {
//     name: "primaryButtonText",
//     label: "Primary Button Text",
//     type: "text",
//     placeholder: "Add to cart",
//   },
//   {
//     name: "secondaryButton",
//     label: "Secondary Button (Ask a question)",
//     type: "object",
//     fields: [
//       { name: "text", label: "Text", type: "text" },
//       { name: "link", label: "Link", type: "text" },
//     ],
//   },
  { name: "footnote", label: "Footnote", type: "textarea" },

  {
    name: "backLink",
    label: "Back Link",
    type: "object",
    fields: [
      { name: "text", label: "Text", type: "text" },
      { name: "link", label: "Link", type: "text" },
    ],
  },

  {
    name: "relatedLabel",
    label: "Related Eyebrow Label",
    type: "text",
    placeholder: "You might also like",
  },
  {
    name: "relatedHeading",
    label: "Related Heading",
    type: "text",
    placeholder: "More manual options",
  },
  {
    name: "relatedCourses",
    label: "Related Courses",
    type: "array",
    itemFields: [
      {
        name: "category",
        label: "Category",
        type: "select",
        options: [
          "Automatic",
          "Manual",
          "Instructor",
          "Intensive",
          "Theory",
          "Simulator",
          "Workshop",
        ],
      },
      {
        name: "tag",
        label: "Tag (e.g. Popular)",
        type: "text",
        placeholder: "Popular",
      },
      { name: "title", label: "Title", type: "text", required: true },
      { name: "description", label: "Description", type: "textarea" },
      {
        name: "price",
        label: "Price",
        type: "text",
        required: true,
        placeholder: "£42",
      },
      {
        name: "originalPrice",
        label: "Original Price (optional)",
        type: "text",
        placeholder: "£56",
      },
      {
        name: "duration",
        label: "Duration",
        type: "text",
        placeholder: "1.5 hours",
      },
      {
        name: "link",
        label: "Link",
        type: "text",
        required: true,
        placeholder: "/courses/manual-taster",
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
];

const EMPTY_COURSE = {
  //   slug: "",
  category: "",
  title: "",
  description: "",
  includesLabel: "What's included",
  includes: [],
  infoCards: [],
  price: "",
  originalPrice: "",
  savingsBadge: "",
  productId: "",
  primaryButtonText: "Add to cart",
  secondaryButton: { text: "Ask a question", link: "/contact" },
  footnote: "",
  backLink: { text: "Back to courses", link: "/courses" },
  relatedLabel: "You might also like",
  relatedHeading: "More options",
  relatedCourses: [],
};

/* ============================================================
   MAIN ROUTER — /admin/courses  and  /admin/courses/:id (or "new")
   ============================================================ */
export default function AdminManualCoursePage() {
  const { id } = useParams();

  if (!id) return <CoursesList />;

  return <EditCourse courseId={id === "new" ? null : id} />;
}

/* ============================================================
   VIEW 1: Courses list
   ============================================================ */
function CoursesList() {
  const dispatch = useDispatch();
  const { courses, coursesLoading } = useSelector((s) => s.manualCoursePage);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  return (
    <div className={styles.adminPage}>
      <div className={styles.container}>
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
              <h1>Course Pages</h1>
              <p>Manage every individual course/product detail page.</p>
            </div>
            {/* <Link
              to="/admin/manual-course-edit-page/new"
              className={styles.editBtn}
            >
              <Plus className="h-4 w-4" />
              New course page
            </Link> */}
          </div>
        </div>

        {coursesLoading && courses.length === 0 && (
          <div className={styles.center}>Loading courses…</div>
        )}

        {!coursesLoading && courses.length === 0 && (
          <p className={styles.formHint}>
            No course pages yet. Create one above.
          </p>
        )}

        <div className={styles.sectionsList}>
          {courses.map((c) => (
            <div key={c._id} className={styles.sectionItem}>
              <div className={styles.sectionItemInfo}>
                <div>
                  <h3>{c.title}</h3>
                  <p>
                    {c.slug}
                  </p>
                </div>
              </div>
              <Link
                to={`/admin/manual-course-edit-page/${c._id}`}
                className={styles.editBtn}
              >
                Edit
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   VIEW 2: Create / Edit form
   ============================================================ */
function EditCourse({ courseId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { course, courseLoading } = useSelector((s) => s.manualCoursePage);

  const [formData, setFormData] = useState(EMPTY_COURSE);
  const [error, setError] = useState("");

  useEffect(() => {
    if (courseId) {
      dispatch(getCourseById(courseId));
    } else {
      setFormData(EMPTY_COURSE);
    }
  }, [dispatch, courseId]);

  useEffect(() => {
    if (courseId && course && course._id === courseId) {
      setFormData(JSON.parse(JSON.stringify({ ...EMPTY_COURSE, ...course })));
    }
  }, [course, courseId]);

  if (courseId && courseLoading && !course) {
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

  // Simple string-array field (e.g. "includes"): stored as array of plain strings
  const handleStringArrayChange = (name, index, value) => {
    setFormData((prev) => {
      const arr = [...(prev[name] || [])];
      arr[index] = value;
      return { ...prev, [name]: arr };
    });
  };
  const handleStringArrayAdd = (name) => {
    setFormData((prev) => ({ ...prev, [name]: [...(prev[name] || []), ""] }));
  };
  const handleStringArrayRemove = (name, index) => {
    setFormData((prev) => ({
      ...prev,
      [name]: (prev[name] || []).filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    for (const field of COURSE_FIELDS) {
      if (field.required && !formData[field.name]?.toString().trim()) {
        setError(`${field.label} is required`);
        return;
      }
    }

    try {
      if (courseId) {
        const result = await dispatch(
          updateCourse(courseId, formData, () =>
            navigate("/admin/manual-course-edit-page"),
          ),
        );
        if (result.meta.requestStatus === "fulfilled") {
          toast.success("Course page updated successfully");
        }
      } else {
        const result = await dispatch(
          createCourse(formData, null, () =>
            navigate("/admin/manual-course-edit-page"),
          ),
        );
        if (result.meta.requestStatus === "fulfilled") {
          toast.success("Course page created successfully");
        }
      }
    } catch (err) {
      setError(err.message || "Failed to save course page");
    }
  };

  return (
    <div className={styles.adminPage}>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link to="/admin/manual-course-edit-page">Course Pages</Link>
          <span>›</span>
          <span>{courseId ? formData.title || "Edit" : "New course"}</span>
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
              <h1>{courseId ? "Edit" : "Create"} Course Page</h1>
              <p>Every field maps directly to the storefront design.</p>
            </div>
            <button
              type="button"
              className={styles.backBtn}
              onClick={() => navigate("/admin/manual-course-edit-page")}
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
          </div>
        </div>

        {error && <div className={styles.errorMsg}>{error}</div>}

        <form className={styles.editForm} onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            {COURSE_FIELDS.map((field) => {
              if (field.type === "stringArray") {
                return (
                  <StringArrayField
                    key={field.name}
                    field={field}
                    values={formData[field.name] || []}
                    onChange={(idx, v) =>
                      handleStringArrayChange(field.name, idx, v)
                    }
                    onAdd={() => handleStringArrayAdd(field.name)}
                    onRemove={(idx) => handleStringArrayRemove(field.name, idx)}
                  />
                );
              }

              return (
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
                  onArrayAdd={() =>
                    handleArrayAdd(field.name, field.defaultItem)
                  }
                  onArrayRemove={(idx) => handleArrayRemove(field.name, idx)}
                />
              );
            })}
          </div>

          <div className={styles.submitBar}>
            {courseId && (
              <button
                type="button"
                className={styles.backBtn}
                onClick={() => {
                  if (
                    window.confirm(
                      `Delete "${formData.title}"? This cannot be undone.`,
                    )
                  ) {
                    dispatch(
                      deleteCourse(courseId, () =>
                        navigate("/admin/manual-course-edit-page"),
                      ),
                    );
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
              disabled={courseLoading}
            >
              <Save className="h-4 w-4" />
              {courseLoading ? "Saving…" : courseId ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ============================================================
   STRING ARRAY FIELD — for plain-text lists like "includes"
   ============================================================ */
function StringArrayField({ field, values, onChange, onAdd, onRemove }) {
  return (
    <div className={styles.sectionDivider}>
      <h4>{field.label}</h4>
      <div className={styles.arrayGroup}>
        {values.length === 0 && (
          <p className={styles.formHint}>No items yet. Click "+ Add" below.</p>
        )}
        {values.map((val, idx) => (
          <div key={idx} className={styles.arrayItem}>
            <div className={styles.arrayItemHeader}>
              <span>Item #{idx + 1}</span>
              <button
                type="button"
                className={styles.removeBtn}
                onClick={() => onRemove(idx)}
                title="Remove"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
            <input
              type="text"
              className={styles.formInput}
              value={val}
              placeholder={field.placeholder}
              onChange={(e) => onChange(idx, e.target.value)}
            />
          </div>
        ))}
        <button type="button" className={styles.addBtn} onClick={onAdd}>
          <Plus className="h-3 w-3" />
          Add Item
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   FIELD RENDERER — text/textarea/select/object/array
   (same shape as AdminHome.jsx's FieldRenderer)
   ============================================================ */
function FieldRenderer({
  field,
  value,
  onChange,
  onObjectChange,
  onArrayItemChange,
  onArrayAdd,
  onArrayRemove,
}) {
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
            required={field.required}
          />
        )}
        {field.hint && <p className={styles.formHint}>{field.hint}</p>}
      </div>
    );
  }

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

  if (field.type === "object") {
    return (
      <div className={styles.sectionDivider}>
        <h4>{field.label}</h4>
        <div className={styles.formGrid}>
          {field.fields.map((sub) => (
            <div key={sub.name} className={styles.formField}>
              <label className={styles.formLabel}>{sub.label}</label>
              <input
                type="text"
                className={styles.formInput}
                value={value?.[sub.name] || ""}
                onChange={(e) => onObjectChange(sub.name, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

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
                    ) : (
                      <input
                        type={sub.type || "text"}
                        className={styles.formInput}
                        value={item[sub.name] || ""}
                        onChange={(e) =>
                          onArrayItemChange(idx, sub.name, e.target.value)
                        }
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
