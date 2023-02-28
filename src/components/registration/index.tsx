import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { IRegistration } from "./types";
import { createRegistration } from "./api/registration";

import registrationData from "./data/registrationData";

export const Registration = () => {
  const [formData, setFormData] = useState<IRegistration>({
    registrationId: uuidv4(),
    participantFirstName: "",
    participantLastName: "",
    schoolName: "Campbell",
    dob: "",
    grade: 1,
    team: "",
    streetAddress: "",
    city: "Campbell",
    state: "OH",
    zipCode: "44405",
    motherFirstName: "",
    motherLastName: "",
    motherPhoneNum: "",
    fatherFirstName: "",
    fatherLastName: "",
    fatherPhoneNum: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createRegistration(formData).then(res => {
      if (res.status === 200) {
        toast.success("Registration successfully submitted!");
      };
    });
  };

  return(
    <div className="bg-gray-100 py-6 sm:px-6 lg:px-8">
      <ToastContainer autoClose={5000}/>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            {/* Text Column Participant */}
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  Participant Information
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  All fields are required.
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  If you are registering multiple children, you will need to submit a separate form for each child.
                </p>
              </div>
            </div>

            {/* Form Column Participant */}
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    {/* Participant First Name */}
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="participantFirstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="participantFirstName"
                        id="participantFirstName"
                        autoComplete="givenParticipantFirstName"
                        onBlur={e => handleChange(e)}
                        required={true}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    {/* Participant Last Name */}
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="participantLastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="participantLastName"
                        id="participantLastName"
                        autoComplete="givenParticipantLastName"
                        onBlur={e => handleChange(e)}
                        required={true}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    {/* School Name */}
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="schoolName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name of School
                      </label>
                      <input
                        type="text"
                        name="schoolName"
                        id="schoolName"
                        autoComplete="givenSchoolName"
                        defaultValue="Campbell"
                        onBlur={e => handleChange(e)}
                        required={true}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    {/* Date of Birth */}
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="dob"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="dob"
                        id="dob"
                        autoComplete="given-dob"
                        min="2011-09-01"
                        onBlur={e => handleChange(e)}
                        required={true}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    {/* Participant's Grade */}
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="grade"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Grade as of September 1, 2023
                      </label>
                      <select
                        id="grade"
                        name="grade"
                        autoComplete="given-grade"
                        onBlur={e => handleChange(e)}
                        required={true}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        {registrationData.grades.map(grade => (
                          <option key={grade}>{grade}</option>
                        ))}
                      </select>
                    </div>

                    {/* Team */}
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="team"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Team
                      </label>
                      <select
                        id="team"
                        name="team"
                        autoComplete="given-team"
                        onBlur={e => handleChange(e)}
                        required={true}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        {registrationData.teams.map(team => (
                          <option key={team.id}>{team.team}</option>
                        ))}
                      </select>
                    </div>

                    {/* Street Address */}
                    <div className="col-span-6 sm:col-span-5">
                      <label
                        htmlFor="streetAddress"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street Address
                      </label>
                      <input
                        type="text"
                        name="streetAddress"
                        id="streetAddress"
                        autoComplete="givenStreetAddress"
                        onBlur={e => handleChange(e)}
                        required={true}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    {/* City */}
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="givenCity"
                        defaultValue="Campbell"
                        onBlur={e => handleChange(e)}
                        required={true}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    {/* State */}
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State
                      </label>
                      <select
                        id="state"
                        name="state"
                        autoComplete="given-state"
                        onBlur={e => handleChange(e)}
                        required={true}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        {registrationData.states.map(state => (
                          <option key={state.id}>{state.state}</option>
                        ))}
                      </select>
                    </div>

                    {/* Postal Code */}
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="zipCode"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Postal Code / Zip
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        id="zipCode"
                        autoComplete="givenZipCode"
                        defaultValue="44405"
                        pattern="[0-9]*"
                        onBlur={e => handleChange(e)}
                        required={true}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            {/* Text Column Parent */}
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  Parent / Guardian Information
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Information for at least one guardian is required. If filling out information for only one guardian, please fill out the sections for "Guardian 1".
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  All fields except for email are required.
                </p>
              </div>
            </div>

            {/* Form Column Parent */}
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    {/* Parent 1 First Name */}
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="motherFirstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Mother / Guardian 1 First Name
                      </label>
                      <input
                        type="text"
                        name="motherFirstName"
                        id="motherFirstName"
                        autoComplete="givenMotherFirstName"
                        onBlur={e => handleChange(e)}
                        required={true}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    {/* Parent 1 Last Name */}
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="motherFirstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Mother / Guardian 1 Last Name
                      </label>
                      <input
                        type="text"
                        name="motherFirstName"
                        id="motherFirstName"
                        autoComplete="givenMotherFirstName"
                        onBlur={e => handleChange(e)}
                        required={true}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    {/* Parent 1 Number */}
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="motherPhoneNum"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Mother / Guardian 1 Phone Number (xxx-xxx-xxxx)
                      </label>
                      <input
                        type="tel"
                        name="motherPhoneNum"
                        id="motherPhoneNum"
                        autoComplete="givenMotherPhoneNum"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="000-000-0000"
                        onBlur={e => handleChange(e)}
                        required={true}
                        maxLength={13}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    {/* Parent 2 First Name */}
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="fatherFirstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Father / Guardian 2 First Name
                      </label>
                      <input
                        type="text"
                        name="fatherFirstName"
                        id="fatherFirstName"
                        autoComplete="givenFatherFirstName"
                        onBlur={e => handleChange(e)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    {/* Parent 2 Last Name */}
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="fatherLastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Father / Guardian 2 Last Name
                      </label>
                      <input
                        type="text"
                        name="fatherLastName"
                        id="fatherLastName"
                        autoComplete="givenFatherLastName"
                        onBlur={e => handleChange(e)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    {/* Parent 2 Number */}
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="fatherPhoneNum"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Father / Guardian 2 Phone Number (xxx-xxx-xxxx)
                      </label>
                      <input
                        type="tel"
                        name="fatherPhoneNum"
                        id="fatherPhoneNum"
                        autoComplete="givenFatherPhoneNum"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="000-000-0000"
                        onBlur={e => handleChange(e)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="col-span-6">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="e.g. RedDevilsAreTheBest@gmail.com"
                        autoComplete="given-email"
                        onBlur={e => handleChange(e)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            {/* Terms and Conditions Left Column */}
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  Terms and Agreements
                </h3>
              </div>
            </div>
            {/* Terms and Conditions Right Column */}
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  By entering this form, I agree that:
                  <ul className="font-medium text-gray-700 mt-4 mb-8 pl-4">
                    {registrationData.termsAndAgreements.map(term => (
                      <li
                        key={term.id}
                        className="list-disc list-outside"
                      >
                        {term.label}
                    </li>
                    ))}
                  </ul>
                  Your support and involvement is needed and appreciated!
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
          </div>
          </div>
        </div>
      </form>
    </div>
  );
};
