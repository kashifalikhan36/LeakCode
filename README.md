# LeakCode -- Your Sidekick for DSA Stuff

## Overview
This Chrome extension is designed to enhance your coding experience on LeetCode by providing timely assistance when working on coding problems. When a user spends more than 30 minutes on a problem, the extension opens a new window displaying the code they've written, a detailed explanation of the solution, and an accompanying video tutorial. This ensures that users can quickly grasp the underlying logic and concepts without spending excessive time on a single problem. The extension maintains the user's original logic and variable names, ensuring that their approach remains intact.

## Features
- **Time-based Alerts**: Detects when the user spends over 30 minutes on a LeetCode problem.
- **Solution Display**: Opens a new window with the code written by the user, providing a side-by-side view of the code and its explanation.
- **Video Tutorial**: Includes a video tutorial for a more comprehensive understanding of the problem-solving approach.
- **Logic Preservation**: Maintains the original logic and variable names in the code, ensuring no alteration of the user's thought process.

## Installation
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/kashifalikhan36/LeakCode.git
   ```
2. Navigate to `chrome://extensions/` in your Chrome browser.
3. Enable **Developer mode** (toggle switch at the top right).
4. Click **Load unpacked** and select the folder where you cloned the repository.
5. Enable certain Chrome flags to ensure the AI functionality works:
   - Go to `chrome://flags/`
   - Enable **Gemini Nano**
   - Enable **Device Optimization**
6. Wait a few hours for the AI functionality to activate.
7. The extension should now be installed and active.

## How to Use
1. Go to LeetCode and start solving a coding problem.
2. If you spend more than 30 minutes on a problem, a new window will pop up.
3. The new window will display:
   - Your code with the original logic and variable names.
   - A detailed explanation of the code.
   - A video tutorial relevant to the problem.

## Technologies Used
- **React/Vite**
- **Gemini Nano**
- **Chrome Extension API**

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request. Ensure that your code follows the existing style and conventions used in the project.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

