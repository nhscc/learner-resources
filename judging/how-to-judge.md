# How to Judge HSCC Submissions

These are instructions for how to judge part 1 and part 2 submissions.

## General advice

- Be suspicious of front-end only authentication, or authentication schemes
  implemented on the front-end that **do not** go through the application's
  backend first.
- When testing asynchronous functionality where text on the webpage is supposed
  to update automatically, allow at least 60 seconds for your updates to appear.
- Contact NHSCC staff via Slack if you need to manipulate data in the API
  backend (separate from the application's backend) to properly test some
  functionality, or if you encounter any issues or have any questions or
  concerns.
- Use [developer tools](https://developer.chrome.com/docs/devtools/device-mode/)
  and/or window resizing to simulate a mobile/tablet view.
- The feedback sections (for positive feedback and constructive criticism) are
  extremely important. Please take your time with them.

## Judging Part 1 Submissions

### What You Need

- One or more contiguous blocks of free time (usually an hour or two).
- A computer with internet access that you can install AWS WorkSpaces on.
- The names and Reviewr submission data of the teams whose solutions you're
  responsible for judging.
- If you're a code judge: sufficient programming experience in JavaScript, PHP,
  and/or Java.
  - If you're assigned a project using a programming language you're unfamiliar
    with, let us know.
- Experience with web/app design and what makes a good website versus a bad
  website.

### Judging a Solution

Once you log into Reviewr, you should see a list of submissions that you are
required to review. If you cannot see your submissions or there is some other
problem, feel free to contact NHSCC staff via Slack. You can click "view" on a
submission to view it, and then on the right-hand side you can expand the
options to see the "evaluate" button. You should click the button that
corresponds with evaluating "PS1".

Each team has submitted a presentation video along with their submission. You
can choose to watch this video before going through these steps or you can watch
this video afterwards (at the end of the judging process). **We recommend you
follow these steps first and watch the presentation video only after step 4.**

1. Install AWS WorkSpaces for your OS
   [here](https://clients.amazonworkspaces.com/).

2. All AWS WorkSpaces should have been restarted and had their credentials
   changed. You will be provided the credentials and information for the teams
   you were assigned to review. For the team you're judging, enter their
   credentials (registration code, username, and password) into the AWS
   WorkSpaces client to login to their virtual machine.

   > Note that you may not have to enter the registration code more than once
   > since it does not change between teams.

3. Once you've booted up their virtual machine, follow the instructions given in
   the team's Reviewr submission under `RUN AND ACCESS INSTRUCTIONS` and
   `LOGIN AND (BRIEF) FEATURE USE INSTRUCTIONS` to run their solution. Use the
   browser given under `BROWSER CHOICE` to access their solution. Note that
   paths to the solution's source code can be found under `SOURCE CODE PATH(S)`;
   any login credentials you might need for the solution as well as the
   presentation video can be found under
   `LOGIN CREDENTIALS AND VIDEO PRESENTATION`.

   > Note: if any of this information is missing or incorrect, let NHSCC staff
   > know immediately via Slack.

4. Follow the instructions given in the Reviewr rubric to judge the submission,
   assigning scores to each requirement/category. Let us know of any
   difficulties you encounter or concerns you have through Slack.

   > Note: if you need to, you can download extra programs like VS Code if it
   > makes judging a team's solution easier for you.

   > **You should not modify any solution's source code.** If a solution does
   > not work for whatever reason, or if functionality cannot be verified (e.g.
   > if the login screen is broken and you can't access the rest of the app),
   > solutions should be scored 0 for all affected requirements.

   > However, **you can modify data in a solution's database**. For example: to
   > give your account tickets on an upcoming flight to test a check-in view.

5. Once you are done with your preliminary scoring, and only if you haven't
   already, watch the presentation video submitted by this team. Revise any
   scores accordingly.

6. Allow any unanswered questions or nagging concerns to guide you as you look
   over and finalize your judgement of this solution. Be sure to add any issues
   you think the other judges should be made aware of to Reviewr's shared "judge
   comments" textarea. Sharing your insights and concerns about this solution
   will improve the judging process overall.

7. Finally, submit your scores for this team through Reviewr.

## Judging Part 2 Submissions

Judging PS2 submissions is very similar to judging PS1 submissions.

### What You Need

- One or more contiguous blocks of free time (usually an hour or less).
  - It is imperative that PS2 solutions are judged **as soon as possible**
    (typically within 24 hours) due to scheduling constraints.
- A computer with internet access that you can install AWS WorkSpaces on.
- The names and Reviewr submission data of the teams whose solutions you're
  responsible for judging.
- If you're a code judge: sufficient programming experience in JavaScript, PHP,
  and/or Java.
  - If you're assigned a project using a programming language you're unfamiliar
    with, let us know.
- Experience with web/app design and what makes a good website versus a bad
  website.

### Judging a Solution

Once you log into Reviewr, you should see a list of submissions that you are
required to review. If you cannot see your submissions or there is some other
problem, feel free to contact NHSCC staff via Slack. You can click "view" on a
submission to view it, and then on the right-hand side you can expand the
options to see the "evaluate" button. You should click the button that
corresponds with evaluating "PS2".

1. Install AWS WorkSpaces for your OS
   [here](https://clients.amazonworkspaces.com/).

2. All AWS WorkSpaces should have been restarted and had their credentials
   changed. You will be provided the credentials and information for the teams
   you were assigned to review. For the team you're judging, enter their
   credentials (registration code, username, and password) into the AWS
   WorkSpaces client to login to their virtual machine.

   > Note that you may not have to enter the registration code more than once
   > since it does not change between teams.

3. Once you've booted up their virtual machine, follow the instructions given in
   the team's Reviewr submission under `RUN AND ACCESS INSTRUCTIONS` and
   `LOGIN AND (BRIEF) FEATURE USE INSTRUCTIONS` to run their solution. Use the
   browser given under `BROWSER CHOICE` to access their solution. Note that
   paths to the solution's source code can be found under `SOURCE CODE PATH(S)`;
   any login credentials you might need for the solution as well as the
   presentation video can be found under
   `LOGIN CREDENTIALS AND VIDEO PRESENTATION`.

   > Note: if any of this information is missing or incorrect, let NHSCC staff
   > know immediately via Slack.

4. Follow the instructions given in the Reviewr rubric to judge the submission,
   assigning scores to each requirement/category. Let us know of any
   difficulties you encounter or concerns you have through Slack.

   > Note 1: if you need to, you can download extra programs like VS Code if it
   > makes judging a team's solution easier for you.

   > Note 2: **You should not modify any solution's source code.** If a solution
   > does not work for whatever reason, or if functionality cannot be verified
   > (e.g. if the login screen is broken and you can't access the rest of the
   > app), solutions should be scored ZERO (0) for all affected requirements.
   >
   > However, **you can modify data in a solution's database**. For example: to
   > give your account tickets on an upcoming flight to test a check-in view.

   > Note 3: When it comes to judging asynchronous update requirements (i.e.
   > interfaces with content that changes without the page refreshing), judges
   > should give a team's app at least 60 seconds to reflect any relevant
   > changes in system state.

5. There is a live presentation/Q&A portion where students and judges will
   converse with one-another about the solution. Use this presentation to revise
   your preliminary scoring if necessary. It is at this point you should address
   any unanswered questions or nagging concerns directly with the students.

6. Submit your scores for this team through Reviewr. Be sure to add any issues
   you think the other judges should be made aware of to Reviewr's shared "judge
   comments" textarea. Sharing your insights and concerns about this solution
   will improve the judging process overall.
