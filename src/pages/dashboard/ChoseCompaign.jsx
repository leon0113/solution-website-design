import React, { useState } from 'react';
import compaign from '../../Assets/compaign.png';
import './chosecompaign.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ChoseCompaign = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const navigate = useNavigate()

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    setSelectedCheckbox(checkboxValue);
  };

  const handleNextButtonClick = (e) => {
    e.preventDefault()
    if (selectedCheckbox) {
      // Perform the task or action here
      navigate('/dashboard/add-compaign', { state: { objective: selectedCheckbox } });
    } else {
      // Display an error or notification indicating checkbox selection is required
      toast.error('Select Your Compaign');
    }
  };

  return (
    <div className="container fluid mt-5">
      <div className="row card">
        <div className="row card-body">
          <p className="text-xl font-medium text-[#63666A] lg:text-2xl">
            Choose Campaign Objective
          </p>
          <hr className="mt-3 lg:mt-[30px]" />
        </div>

        <div className="row">
          <div className="col d-flex align-items-center text-center ps-5 mt-3">
            <img
              src={compaign}
              alt=""
              style={{ height: '25px', width: '34px' }}
            />
            <label className="text-xl font-medium text-[#63666A] lg:text-2xl ps-3">
              <input
                type="checkbox"
                id="checkbox1"
                name="campaign"
                value="Awareness"
                className="Input"
                checked={selectedCheckbox === 'Awareness'}
                onChange={handleCheckboxChange}
              />
              <span className="checkbox-custom"></span>
              <span className="checkbox-label">Awareness</span>
            </label>
          </div>
        </div>

        <div className="row">
          <div className="col d-flex align-items-center text-center ps-5 mt-3">
            <img
              src={compaign}
              alt=""
              style={{ height: '25px', width: '34px' }}
            />
            <label className="text-xl font-medium text-[#63666A] lg:text-2xl ps-3">
              <input
                type="checkbox"
                id="checkbox2"
                name="campaign"
                value="Traffic"
                className="Input"
                checked={selectedCheckbox === 'Traffic'}
                onChange={handleCheckboxChange}
              />
              <span className="checkbox-custom"></span>
              <span className="checkbox-label">Traffic</span>
            </label>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2 mb-4">
          <button className="rounded-md border border-gray-900 px-6 py-2 text-sm lg:text-base">
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleNextButtonClick}
            className="rounded-md bg-[#63666A] px-6 py-2 text-sm text-white lg:text-base"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChoseCompaign;
