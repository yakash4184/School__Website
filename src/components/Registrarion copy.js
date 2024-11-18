import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    nationality: '',
    religion: '',
    category: '',
    gender: '',
    city: '',
    state: '',
    pincode: '',
    mobileNumber: '',
    email: '',
    fatherName: '',
    mobileNumberFather: '',
    fatherOccupation: '',
    motherName: '',
    mobileNumberMother: '',
    motherOccupation: '',
    lastAttendedClass: '',
    lastYear: '',
    schoolName: '',
    schoolBoard: '',
    schoolAddress: '',
    lastExamResult: '',
    appliedClass: '',
    agreement: false,
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.studentName || !formData.email || !formData.mobileNumber) {
      setError('Please fill in all required fields.');
      return;
    }

    setError('');

    const emailParams = {
      ...formData,
      agreement: formData.agreement ? 'Agreed' : 'Not Agreed',
    };

    emailjs
      .send(
        'service_1ornvl4',
        'template_igke88a',
        emailParams,
        'ZTvFjSgfW4QQJx1rC'
      )
      .then(
        () => {
          alert('Form submitted successfully!');
          setFormData({
            studentName: '',
            dob: '',
            nationality: '',
            religion: '',
            category: '',
            gender: '',
            city: '',
            state: '',
            pincode: '',
            mobileNumber: '',
            email: '',
            fatherName: '',
            mobileNumberFather: '',
            fatherOccupation: '',
            motherName: '',
            mobileNumberMother: '',
            motherOccupation: '',
            lastAttendedClass: '',
            lastYear: '',
            schoolName: '',
            schoolBoard: '',
            schoolAddress: '',
            lastExamResult: '',
            appliedClass: '',
            agreement: false,
          });
        },
        () => {
          alert('Failed to submit form. Please try again.');
        }
      );
  };

 
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#007bff', marginBottom: '20px' }}>ADMISSION FORM</h2>
          {error && <div style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>{error}</div>}
      
          <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {/* PERSONAL DETAILS */}
            <section style={{ gridColumn: '1 / -1' }}>
              <h3 style={{ backgroundColor: '#f0f8ff', padding: '10px', marginBottom: '10px' }}>PERSONAL DETAILS</h3>
            </section>
            {['studentName', 'dob', 'nationality', 'religion', 'category', 'gender', 'city', 'state', 'pincode', 'mobileNumber', 'email'].map((field) => (
              <div key={field}>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>{field.replace(/([A-Z])/g, ' $1').toUpperCase()}:</label>
                <input
                  type={field === 'dob' ? 'date' : field.includes('email') ? 'email' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required={['studentName', 'mobileNumber', 'email'].includes(field)}
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
                />
              </div>
            ))}
      
            {/* PARENT'S DETAILS */}
            <section style={{ gridColumn: '1 / -1' }}>
              <h3 style={{ backgroundColor: '#f0f8ff', padding: '10px', marginBottom: '10px' }}>PARENT'S DETAILS</h3>
            </section>
            {['fatherName', 'mobileNumberFather', 'fatherOccupation', 'motherName', 'mobileNumberMother', 'motherOccupation'].map((field) => (
              <div key={field}>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>{field.replace(/([A-Z])/g, ' $1').toUpperCase()}:</label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
                />
              </div>
            ))}
      
            {/* SCHOOL DETAILS */}
            <section style={{ gridColumn: '1 / -1' }}>
              <h3 style={{ backgroundColor: '#f0f8ff', padding: '10px', marginBottom: '10px' }}>SCHOOL DETAILS</h3>
            </section>
            {['lastAttendedClass', 'lastYear', 'schoolName', 'schoolBoard', 'schoolAddress'].map((field) => (
              <div key={field}>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>{field.replace(/([A-Z])/g, ' $1').toUpperCase()}:</label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
                />
              </div>
            ))}
      
            {/* OTHER DETAILS */}
            <section style={{ gridColumn: '1 / -1' }}>
              <h3 style={{ backgroundColor: '#f0f8ff', padding: '10px', marginBottom: '10px' }}>OTHER DETAILS</h3>
            </section>
            {['lastExamResult', 'appliedClass'].map((field) => (
              <div key={field}>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>{field.replace(/([A-Z])/g, ' $1').toUpperCase()}:</label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
                />
              </div>
            ))}
      
            <div style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
              <label>
                <input
                  type="checkbox"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleChange}
                  style={{ marginRight: '10px' }}
                />
                I AGREE TO THE TERMS AND CONDITIONS
              </label>
            </div>
      
            <div style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
              <button
                type="submit"
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      );
      
};

export default AdmissionForm;
