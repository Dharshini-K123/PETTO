import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Firstpage.css';

export default function Rule() {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleCheckboxChange = () => {
    setAgreed(!agreed);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (agreed) {
      // If user agreed, navigate to the first page
      navigate('/firstpage');
    } else {
      alert('Please agree to the terms');
    }
  };

  return (
    <div className='rules'>
      <h1>ADOPTION CARE</h1><br></br>
      <form onSubmit={handleSubmit}>
        <input
          type="checkbox"
          id="agreeCheckbox"
          checked={agreed}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="agreeCheckbox">
          I agree to the terms and conditions
        </label>
        <br/><br/>
        <br />
        <p><b>1.ADOPTION DONATION:</b> I agree to pay the Adoption Donation to help defray PW’s expenses for food, sheltering,
        spaying or neutering, vaccinations and veterinary care. Additional donations are welcome. I understand that all
        donations are NON-REFUNDABLE.</p>
        <p><b>2.YOU MUST NOTIFY PW IF YOU MOVE OR CHANGE ADDRESS:</b> I agree that if I move or change address that I will
        immediately contact PW and provide PW with the change of address information. This is required to ensure
        that all records and microchip information is properly updated.</p>
        <p>
        <b>3.THE PET MUST HAVE PROPER IDENTIFICATION AND LICENSES AT ALL TIMES:</b> I agree to keep an identification tag,
        attached to a properly fitted collar, on the Pet at all times. I agree to obtain, and maintain, the proper municipal
        license if required under local law. I also agree to comply with all local and state statutes and ordinances that
        apply to the Pet.</p><p>
        <b>4. YOU MUST PROVIDE THE PET WITH PROPER VETERINARY CARE:</b> I agree to provide the Pet with the necessary
        vaccinations as advised by the Pet’s veterinarian. I agree to obtain immediate veterinary care should the Pet
        become sick or injured, and to take full financial responsibility for any veterinary expenses. PW is not
        responsible for any veterinary expenses.</p><p>
        <b>5. THE PET MUST BE TREATED AS AN INDOOR PET:</b> I agree to treat the Pet as an indoor pet and household
        companion, not as an outdoor pet. This means that the Pet must be kept inside the home in a safe place at all
        times. The Pet cannot be left outside while unsupervised unless PW has given prior written approval.</p><p>
        <b>6. THE PET MUST BE PROVIDED PROPER TREATMENT:</b> I agree to provide the Pet with humane treatment at all
        times. This means providing the Pet with proper food, fresh water, proper shelter and exercise, and allowing a
        reasonable amount of time for the Pet to adjust to new surroundings.</p><p>
        <b>7. PW MAKES NO REPRESENTATIONS OR GUARANTEES AS TO THE TEMPERAMENT/AGE OF THE PET:</b> I understand
        that there is no guarantee of any kind as to the health, temperament, training or age of the Pet. I understand
        that PW, its agents and employees make no representation or guarantee of any kind, either explicitly or
        implicitly, as to the health, temperamental, mental disposition or training of the Pet.</p>
        <button className="n" type="submit">Submit</button>
      </form>
    </div>
  );
}
