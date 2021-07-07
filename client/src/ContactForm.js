import React from 'react'

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  render() {
    return (
      <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
        <h3 className="text-xl mb-8"><b>Send us message!</b></h3>
        <div className="flex">
          <div id="labels" className="mr-4">
              <label className="inline-block mb-2" htmlFor="name">Name :</label><br/>
              <label className="inline-block mb-2" htmlFor="InputEmail">Email address :</label><br/>
              <label className="inline-block mb-2" htmlFor="message">Message :</label><br/>
          </div>
          <div id="inputs">
              <input type="text" className="border-2 rounded-lg border-blue-500 bg-transparent mb-2 focus:border-blue-900 focus:outline-none px-1" value={this.state.name} onChange={this.onNameChange.bind(this)} /><br/>
              <input type="email" className="border-2 rounded-lg border-blue-500 bg-transparent mb-2 focus:border-blue-900 focus:outline-none px-1" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} /><br/>
              <textarea className="border-2 rounded-lg border-blue-500 bg-transparent mb-2 focus:border-blue-900 focus:outline-none px-1" rows="3" value={this.state.message} onChange={this.onMessageChange.bind(this)} /><br/>
          </div>
        </div>
        <button type="submit" className="bg-blue-200 hover:bg-blue-400 border-2 border-blue-500 rounded-lg px-2">Submit</button>
      </form>
    );
  }

  //backdrop-filter backdrop-blur-xl rounded-2xl bg-opacity-25
  //backdrop-filter backdrop-blur-xl bg-opacity-25 rounded-2xl border border-gray-500

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:3002/send', {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(
      (response) => (response.json())
    ).then((response) => {
      if (response.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }
}

export default ContactForm
