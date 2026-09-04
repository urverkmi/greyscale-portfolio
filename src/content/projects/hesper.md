---
heroImage: /images/hesper-title.png
intro: >
  As part of a course, I developed a MR (mixed-reality) museum experience that turns artwork interpretation into a spatial interaction.
  <br><br>
  <br><b>Role</b>: Designer / Developer (Individual project)
  <br><b>Course</b>: Emergent User Interfaces
  <br><b>Platform</b>: Meta Quest 3
  <br><b>Tools</b>: Unity, Meta XR SDK, MRUK
  <br><b>Duration</b>: 4 weeks
badge: Balancing guided learning with visitor autonomy

sections:
  - title: The attention challenge
    accent: "#525252"
    blocks:
      - html: |
          Traditional museum information displayed on labels and plaques often require visitors to shift their visual attention away from the artwork. With MR, I wanted to explore if placing interpretation directly within the artwork can create a more cohesive experience between looking and learning.
        image:
          src: /logos/hesper-traditional.svg
          caption: The traditional museum viewing experience
  - title: How research shaped my design principles
    accent: "#525252"
    blocks:
      - html: |
          Desktop research and my ethnography at Helsinki's Ateneum art museum shaped the backbone of the interactions.
          <br><br><b>1. Visitors' engagement varies a lot — between-subject</b>
          <br>During an extended observation at Ateneum, I noticed that engagement with wall texts varied widely throughout different visitors.  This suggested that guidance should be optional so that it accommodates different levels of interest.
          <br><b>2. Visitors' engagement varies a lot — within-subject</b>
          <br>During the observation, I noticed that even within the same person, engagement with different artworks can vary a lot. This suggested that information should be self-directed and bite-sized.
          <br><b>3. MR <i>can</i> break the spatial limitations of interpretation</b>
          <br>There are existing samples of special MR exhibitions that leveraged spatial annotations and overlays to provide immersive experiences.
      - html: |
          I grounded my design principle as the following: 
          <br><b>Autonomy-preserving, 
          <br>Guide instead of interrupt, 
          <br>Spatially relevant.</b>
  - title: Hesper, the Artsy Ghost
    accent: "#af0ce6"
    blocks: 
      - html: |
          With these principles in mind, I started designing a playful MR guide that reveals information as visitors choose to explore. The core interaction is triggered by proximity as the user approaches the artwork, then interaction points will be visible so the user can pick which area to learn about.
        image:
          src: /images/hesper-user-journey.png
      - html: |
          The interaction point activates a combination of visual aid and audio guide to inform the viewer of the selected area. Throughout the interaction, there is a silence button available to the user to mute all aids to simply observe.
        image:
          src: /images/hesper-testing-princess.jpg
          caption: Screenshots from user testing session — area of interest
      - html: |
          It is also possible to compare the artwork with another work placed side-by-side. This works really well in showing a related work. With this example, Hesper allows visitors to compare how Picasso created his rendition of <i>Las Meninas</i>.
        image:
          src: /images/hesper-testing-picasso.jpg
          caption: Screenshots from user testing session — "Compare with Picasso"
  - title: User testing and iterations
    accent: "#525252"
    blocks:
      - html: |
          User testing boiled down to two main iterative changes that I included in the final prototype.
          <br><br>1. Users couldn't always tell which area an interaction point referred to. The spatial relationship between the point and its corresponding area was not as apparent as I assumed. To address this, I added outlines that would show on hover to make the relationship explicit.
          <br><br>2. Users wanted to interact with the dog in <i>Las Meninas</i>. In the painting, there is a dog that is napping in the corner. A couple users tried to click on the dog, and I realized that <b>not everything interesting needs to be educational</b>. So, I added a snoring soundtrack to an interaction point beside the dog, as a little "easter egg". 
      - image:
          src: /images/hesper-dog.png
          sizePercent: 60
          align: bottom
  - title: Demo
    accent: "#1846b4"
    blocks:
      - video:
          youtube: "https://youtu.be/X3e9L07OeNM"
          caption: Youtube link to the demo
    
  - title: Reflections
    variant: circle
    blocks:
      - html: |
          The prototype left me curious about what makes people interested enough to seek out information voluntarily. If I were to continue on this project, I would extend the experience to sculptures and allow visitors to move around an artwork and discover different layers of information from different angles. 
          <br><br>Ultimately, I explored MR as a tool for making learning about art feel more natural and intuitive. While MR museum guides are not yet practical for actual adoption due to their scarcity, this project served as a personal experiment of whether I can design a seamless experience with a peripheral technology that might feel "extra".

---
