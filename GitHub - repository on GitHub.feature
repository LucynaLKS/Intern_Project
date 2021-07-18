Feature: GitHub - repository on GitHub

    How to create repository on GitHub and how to create local repository from GitHub

    Scenario name: GitHub repository
    Author: Lucyna Ksiązek-Sperka
    Prerequisites: User logged on GitHub

    Scenario: Open the selection list
        Given User has opened side on GitHub
        When User has opened side on GitHub
        Then The selection list will be expand

    Scenario: Open the new repository card
        Given The selection list is expand
        When User click on position New respository
        Then The creating card of new repository will be open

    Scenario Outline: Completing the required data
        Given The creating card of new repository is opened
        When User enters the Repository name <repositoryName>
        And User enters the Description <description>
        And User chooses kind repository <kindRepository>
        And User selects repository attributes <repositoryAtributes>
        And User click the button Create repository
        Then The repository will be created