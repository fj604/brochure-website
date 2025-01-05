import React, { useState } from 'react';
import { View, Heading, TextField, Button } from '@aws-amplify/ui-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    // Placeholder: Add form submission logic
  };

  return (
    <View as="section" id="contact" padding="2rem">
      <Heading level={2} marginBottom="1rem">Contact Us</Heading>
      <View as="form" onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          required
          marginBottom="1rem"
        />
        <TextField
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
          marginBottom="1rem"
        />
        <TextField
          name="message"
          label="Message"
          value={formData.message}
          onChange={handleChange}
          as="textarea"
          required
          marginBottom="1rem"
        />
        <Button type="submit" variation="primary">Submit</Button>
      </View>
    </View>
  );
};

export default ContactForm;
