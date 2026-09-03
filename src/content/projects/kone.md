---
heroImage: /images/kone-title-img.jpg
sponsor:
  name: KONE Design
  url: https://origin-www.kone.com/en/careers/professionals-and-technical-experts/design.aspx
intro: >
  KONE Design gave us an open-ended challenge: explore the role of an AI concierge in the elevator, and design a joyful experience for passengers. We grounded the concept in modern, budget-friendly hotels, and we designed for hotel guests navigating an unfamiliar city so that the concierge has a chance to learn the user’s preferences over their stay.
  <br><br>
  <br><b>Role</b>: Interaction Designer (as part of group of 4)
  <br><b>Course</b>: Experience Design Project
  <br><b>Tools</b>: Figma, Miro
  <br><b>Duration</b>: 3 months
badge: An AI Companion for elevator riders

sections:
  - title: Designing for when the AI should not be present
    accent: "#525252"
    blocks:
      - html: |
          Generative AI is becoming omnicompetent. It can be marvelous as a productivity tool, but what role does it play when the goal is to increase a user’s joy? And how willing are people (when they are tired, distracted, or seeking intimacy) to interact with a product they didn't ask for?
          <br><br>These questions led us to shape our core question that is counter-intuitive to conventional product design: <b>when should our product stay out of the way?</b>
      - html: |
          <b>The elevator as an interface</b>.
        image:
          src: /logos/kone-elevator.svg
      - html: |
          <br><br>We designed the concierge as a built-in screen within the hotel elevator, positioned from roughly waist height upward to make interaction comfortable and accessible for most guests. We connected each guest’s interaction data to their room key card, as most hotels already require them to tap the same card to access their floor. This allows the concierge to recognize guests seamlessly without requiring additional input. 
          <br><br>Naturally, privacy was designed into the system. A guest's interaction data is automatically erased as they check out to ensure that the concierge does not retain information beyond their stay.
  - title: Passive - Active interactive flow
    accent: "#525252"
    blocks:
      - html: |
          We designed the concierge around <b>absence</b> as the default. The passive screens serve generic information until the guest invites the AI by tapping their hotel key card, marking an explicit interaction.
      - image:
          src: /images/kone-basic-flow.png
          alt: "Basic flow of the KONE concierge"
  - title: Designing the feedback loop
    accent: "#525252"
    blocks:
      - html: |
         I designed the feedback loop of our recommendation system to treat engagement signals as positive feedback that indicates a user’s interest in a particular type of information. We took inspiration from the reinforcement mechanism underlying doom-scrolling: the more a user interacts with a certain type of content, the stronger the signal that it resonates with them.
         <br><br>These preferences are then stored as part of the user’s interaction data and fed back into the recommendation system, allowing the concierge to continuously customize content shown to the user.
      - image:
          src: /images/kone-feedback.png
          alt: "KONE concierge recommendation feedback loop"
  - title: Designing what not to build
    accent: "#525252"
    blocks:
      - html: |
          We deliberately said no to two seemingly intuitive features. These decisions were grounded in user interviews, storyboard evaluations, and desktop research. 
          <br><br><b>1. No voice.</b> <br>Speaking to an assistant in a shared elevator made people feel awkward. A visual interface, on the contrary, allows guests to browse and interact at their own pace. However, omitting voice input also limited our input space. To compensate, we introduced greater variety in the information displayed (e.g.  attraction recommendations, local culture and festivals, timely discounts, etc.), increasing the likelihood that users would come across something that piqued their interest.
          <br><br><b>2. No humanlike avatar.</b> <br>We also chose not to portray the concierge with a human-like character. Across cultures, a human-shaped concierge risks reading as unsettling rather than friendly, a phenomenon known as <i>the uncanny valley</i>. Keeping the concierge visually absent also preserves user autonomy, as it avoids asking users to engage with it as though it were a person. 

  - title: Takeaways
    variant: circle
    blocks:
      - html: |
          <b> Engineer <--> Designer mindsets </b> — Coming from an engineering background, my instinct is to find pain points, optimize inefficiencies, and solve problems. For me, this project was refreshing because there were no apparent pain points to solve. Learning to design for experience and restraint rather than pure function is the perspective I carry from this project into AI interaction design.
          <br><br><b> Yes, AI. But... </b> — It is easy to treat AI as the solution to everything. However, capability does not simply make interaction more meaningful. This project taught me to step back and ask what kind of interaction is actually enjoyable for a broad range of people. As Uncle Ben famously says, <i>"With great power comes great responsibility."</i> ;)
       

---