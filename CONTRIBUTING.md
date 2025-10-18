# Contributing to Ussop

Thank you for your interest in contributing to our project! Here are some guidelines to help you get started.

We are constantly working to improve Test.ai. Feel free to open an issue or submit a pull request if you'd like to contribute or report bugs.

## Getting Started

### Environment Setup

Ussop requires API keys for authentication and video streaming:

1. **Create a `.env.local` file** in the project root with the following environment variables:

```env
# Authentication - Clerk

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret

# Video Calls - Stream

NEXT_PUBLIC_STREAM_API_KEY=your_stream_key
STREAM_SECRET_KEY=your_stream_secret

# Application

NEXT_PUBLIC_BASE_URL=http://localhost:3000
```
2. **Obtain Clerk Keys**:
- Sign up at [clerk.dev](https://clerk.dev)
- Create a new application → API Keys
- Copy Publishable Key and Secret Key

3. **Obtain Stream Keys**:
- Sign up at [getstream.io](https://getstream.io)
- Create an app with Video capability → API Keys
- Copy API Key and API Secret

### Steps to Contribute:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

Thank you for your contributions!







