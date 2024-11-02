# GEOTOP-A seminar webpage

Web-seminar series on Applications of Geometry and Topology: [link](https://seminargeotop-a.com/)

## Prerequisites

1.	Install Node.js from [https://nodejs.org/](https://nodejs.org/). Choose the recommended version for most users.
2.	Install Git from [https://git-scm.com/](https://git-scm.com/), which will help manage the code repository.
3. Clone the repository:
   1. Open a terminal in the directory where you want to have the code. Run the following instructions.
   2. Clone the project repository by running: 

   ``git clone https://github.com/miguelruor/geotop-a-3.0.git``

   This will create a directory ``geotop-a-3.0`` inside your current directory, which is the code repository.
   3. Enter the directory with ``cd geotop-a-3.0``
4. Install yarn with ``npm install -g yarn``.
5. Install code dependencies with ``yarn install``.

## Run webpage locally

This is a [Next.js](https://nextjs.org/) project. To run the webpage locally, run:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Workflow

Changes are made in ``dev`` branch. Be sure to make commits with not too much changes (it is a best practice), for example, one commit per talk and speaker information. Then a *pull request* is made to ``main`` branch to deploy changes on production.

The website is deployed with [Vercel](https://vercel.com/), and changes are automatically deployed when a pull request to main is accepted.

## Data

There are four main files where data are stored:
- **Speakers data**: in file ``/data/speakers.json``. This file is a mapping ``{ speaker_id : speaker_data }``. Each speaker entry includes fields like the name, surname, talks given, and whether an image is available.
- **Talks data**: in file ``/data/speakers.json``. This file is a mapping ``{ talk_id : talk_data }``. It includes details about each talk, such as the title, date, speaker ID, abstract, and YouTube link.
- **Semester talks data**: Future talks for the current semester, shown in main page, are stored in ``/data/future_talks.json`` and include fields like date, speaker name, and institution. This file is a mapping ``{ semester : list_of_talks }``.
- **Next talks data**:This data is in ``data/next_talks.json`` and lists IDs of talks that appear on the “Next Talks” page.

The speaker images are stored in the directory ``/public/img/speakers/`` and should be squared (same width and height). The format to save a speaker image is ``sp{ID}.png``, where ``{ID}`` is replaced by the speaker ID (which is the key of the speaker data in the json file). Examples: ``sp0.png``, ``sp122.png``, etc.

**IMPORTANT:** 
1. Be sure to be consistent with the format of how data is stored in those files. The format can be inferred from previous data.
2. Before adding a speaker, search through the file if it was added before. For example, you can search a file when opened with VS-Code with ``Ctrl+F``.

