import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
    letter: "",
  });
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.password ||
      !formData.letter ||
      !formData.role
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true); // Start loading
    try {
      const response = await fetch("https://auto-intern-backend-production.up.railway.app/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/final", { state: { fromMain: true } }); // Navigate after successful submission
      } else {
        const error = await response.json();
        alert(error.message || "Failed to submit application.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the application.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white px-6">
      <a
        className="self-start text-2xl text-white hover:text-gray-400 transition-colors"
        href="/"
      >
        &#x2190;
      </a>

      <h1 className="text-5xl font-extrabold mt-2 mb-4">Apply for Jobs</h1>
      <p className="text-center max-w-2xl text-gray-400 mb-12">
        AutoIntern automates your internship applications. Fill in your
        Internshala details, and let our AI handle the job applications for you
        — fast, smart, and effortless.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-[#07182E] p-8 rounded-lg shadow-lg text-white border border-gray-700"
      >
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="johndoe@gmail.com"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="********"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Job Role</label>
          <input
            type="text"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="e.g. Web Development"
            required
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium mb-2">Cover Letter</label>
          <textarea
            value={formData.letter}
            onChange={(e) =>
              setFormData({ ...formData, letter: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            rows="4"
            placeholder="Write your cover letter"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-2 mb-4 bg-[rgb(0_229_153_)] text-black px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors"
          disabled={loading}
        >
          {loading ? "Please wait, applying..." : "Get Started"}
        </button>
      </form>
    </div>
  );
};

export default Main;
