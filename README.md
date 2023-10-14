# WhisperVerse

WhisperVerse is a simple and anonymous platform where users can share their thoughts and expressions without the need for user authentication. It provides a space for open and anonymous communication.

## Features

- **Anonymous Posting:** Users can post content without the need for user accounts or authentication.
- **Public Feed:** View the latest posts from others in a continuous scroll.
- **Interaction Features:** Like or comment on posts anonymously.
- **Anonymous Contributions:** Submit text-based or other content anonymously.
- **No Data Storage:** No personal data is stored on the platform.

## Getting Started

### Prerequisites

- .NET 7 SDK
- Your preferred development environment (Visual Studio, Visual Studio Code, etc.)

### Installation

1. Clone the repository:

   git clone https://github.com/DestinyObs/WhisperVerse.git
   
3. Navigate to the project folder:

   ```bash
   cd WhisperVerse
   ```

4. Build and run the project:

   ```bash
   dotnet run
   ```

5. Access the application in your web browser at [http://localhost:5090](http://localhost:5090).

### Usage

- Visit the homepage to view the public feed and the latest posts.
- Click on the "Create" button to make a new anonymous post.
- Like or comment on posts anonymously.

## Contributing

Contributions are welcome! If you have suggestions, find a bug, or want to contribute in any way, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License
MIT License

Copyright (c) [2023] [DestinyObs]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Acknowledgments

- Thanks to people of the world for the inspiration.

## Project Information

### Project Type

- ASP.NET Core MVC Project

## Launch Settings

### http Profile:

- Port: 5090
- Environment: Development

### https Profile:

- Ports: 7237 (https), 5090 (http)
- Environment: Development

### IIS Express Profile:

- Ports: 5492 (http), 44390 (ssl)
- Environment: Development
- Authentication: Anonymous

### Docker Profile:

- Ports: 443 (https), 80 (http)
- Environment: Development
- SSL: Enabled
