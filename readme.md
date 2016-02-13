# Zoidbot (\/)(;,,;)(\/)
> A bot for Slack built with [Botkit](https://github.com/howdyai/botkit)

## Description

Zoidbot is a bot created for the Slack channel of the *Software Engineering*  2015 group of Telecom Nancy.

## Installation

1. Install Node.js and/or npm. I recommend that you use [nvm](https://github.com/creationix/nvm) :

    ```shell
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash
    ```

    Run a new shell.

    ```shell
nvm install v5.6.0
nvm alias default 5.6.0
    ```

    Verify the result with :
    ```shell
nvm which default
node -v
    ```

2. Clone this repository, and go in the created folder.

3. Install all dependencies using npm :

    ```shell
npm install
    ```

4. If you want to access Zoidbot from any directory, you can copy the file `zoidbot` to a folder from your `$PATH`, or create a symbolic link to it.

## Usage

- Starting a new instance of Zoidbot :
    `zoidbot start`
- Restarting an instance of Zoidbot :
    `zoidbot restart`
- Stopping a new instance of Zoidbot :
    `zoidbot stop`
- Starting a new instance of Zoidbot if none is currently running :
    `zoidbot start_if_needed`
- Tailing the log :
    `zoidbot log`

Any other argument given to `zoidbot` will lead to the display of a short help message.

> Note that you will need a *Token* from Slack in order to link your bot to a channel. Once you got one from Slack, you have to set it in "config.js" before starting your instance.

## Contributing

Contributions to this repository are made with forks and pull requests. Any (not so) serious help will be much appreciated :grin:.
If you have found a bug or want to see something added, you can write an Issue.

## blblblblblbl

(\/)(;,,;)(\/)
