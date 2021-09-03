Integration Questions

 CI: Jenkins, Real time: Bugsnag


2. 

Jenkins Blue Ocean:  User Friendly
	The user is able to edit their pipelines with an intuitive and visual process.
	The team is able to personalize it to their needs based on their role.
	Native Integration for branch and pull requests to maximize developer productivity.


Bugsnag: 
	Has a friendly UI to get real time reports.
	Have the option to ignore minor bugs and focus on the bigger bugs.
	Gives you a personalized view of all your apps.

3. Both tools have very good documentation. Jenkins and Bugsnag both have examples of how their tools work. Both have documentation links with easy to use UI explaining just how their tools work. They both make it easy with How-To videos.


4. Jenkins was started in 2004. Bugsnag was created in 2013. Bugsnag has users like Shopify, Docker, Lyft, Target, Mailchimp. They are both in active development according to their githubs.
Bugsnags last pull request was 26 seconds ago, updating their Ruby software. Jenkins most recent update was 20 hours ago.


Part 2:

1. Results for the extraLargeArray
insert 1.076742583 s
append 6.304584 ms

Results for the largeArray
insert 10.540875 ms
append 707.792 μs

Results for the mediumArray
insert 215.417 μs
append 151.875 μs

Results for the smallArray
insert 47.584 μs
append 103.25 μs

Results for the tinyArray
insert 32.709 μs
append 89.125 μs

3. doublerAppend is scaling better. It started off slower but is scaling consistently. Where as doublerInsert is starting off faster but scaling slower. From largeArray to extraLargeArray the jump was from 10ms to over 1s. That is a lot.

4. I believe the reason is because with unshift you have to move the whole array over when inserting a new element. With push you are just adding the element to the end of the array.