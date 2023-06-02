import { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    contactName: '',
    company: '',
    dateContacted: '',
    meetingScheduled: false
  });

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    const fieldValue = type === 'checkbox' ? event.target.checked : value;
    setFormData({ ...formData, [name]: fieldValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic or API call
    console.log(formData);
    // Reset form fields
    setFormData({
      contactName: '',
      company: '',
      dateContacted: '',
      meetingScheduled: false
    });
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 p-5">
      <h2 className="text-3xl font-bold mb-4">Contact Info Input</h2>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="contactName" className="block text-gray-700">Name of Contact</label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:border-blue-500"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-gray-700">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:border-blue-500"
            placeholder="Google, e.g."
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dateContacted" className="block text-gray-700">Date Contacted</label>
          <input
            type="date"
            id="dateContacted"
            name="dateContacted"
            value={formData.dateContacted}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4 pt-2">
          <label htmlFor="meetingScheduled" className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              id="meetingScheduled" 
              name="meetingScheduled" 
              checked={formData.meetingScheduled}
              onChange={handleInputChange} 
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 font-medium text-gray-700 dark:text-gray-300">Meeting Scheduled</span>
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg w-full lg:w-auto">Create New Networking Contact</button>
      </form>
    </div>
  );
};

export default FormComponent;
