# Instant Runoff Voting

This is an example implementation of the functionality required by the
[2019 problem statement](https://github.com/nhscc/problem-statements/blob/master/2019/bdpa-elections-part-1.md).

The relevant PHP code is only 80 lines without the comments and explanations.
The IRV logic by itself is only 40 lines by the same metric. The rest of this
code is there to make the nice helpful buttons in the UI work their magic.

What follows is also an example of what might score a team a 3 for code
organization and readability on the rubric. Note the tabbing, spacing, and
comments.

## How to use

You can run this example locally without Apache or any server by running the
following in the Windows command line or Linux shell:

```
php -S localhost:8080 demo.php
```

You can access the resulting page by navigating your browser to
http://localhost:8080.
