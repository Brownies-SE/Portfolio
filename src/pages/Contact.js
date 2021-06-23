import React from "react";

function Contact() {
  return (
    <div className="p-3 col">
      <h1>Contact Me</h1>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Name:
        </label>
        <input
          type="name"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name"
        ></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address:
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        ></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Message:
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

      <button className="btn bg-primary text-light justify-content-center">
        Submit
      </button>
    </div>
  );
}

export default Contact;
