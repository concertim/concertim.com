---
title: "Contact Us"
draft: false
layout: feature
---
<p>Want to find out more about how our subscription offerings can help you? Get in touch below and a member of our team will get back to you</p>
<form
  action="https://formspree.io/f/mwpkkere"
  method="POST"
  id="contact-form"
>
  <label>Name:</label>
  <input type="text" name="name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" required/>

  <label>Email:</label>
  <input type="email" name="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" required/>

  <label>Company Name:</label>
  <input type="text" name="company" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" required/>

  <label >Which <a href="/subscriptions">Subscription Tier</a> are you interested in?</label>
  <select class="w-full pb-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" id="subscription-type" name="subscription-type" required>
    <option value="l1">Level 1</option>
    <option value="l2">Level 2</option>
    <option value="l3">Level 3</option>
  </select>

  <!-- your other form fields go here -->
  <button class="inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold transition duration-200 ease-in-out bg-primary-600 text-white hover:bg-primary-700 hover:scale-105" type="submit">Submit</button>

  <p id="form-status" class="form-status"></p>
</form>
<script>
var form = document.getElementById('contact-form');
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for registering your interest!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem registering your interest";
  });
}
form.addEventListener("submit", handleSubmit)
</script>
