Feature: Example 2
    Scenario: Check times do match
        Given we are in Cinepolis
        When we choose "105"
        Then we select "cinepolis-san-pedro"
        And we get the movie list
        And we go inside each of them
