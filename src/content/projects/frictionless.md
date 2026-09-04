---
heroImage: /images/frictionless-title-img.png
sponsor:
  name: Aurora Propulsion Technologies
  url: https://aurorapt.space/
intro: >
  Aurora needed an repeatable in-house testing process for their plasma brake
  product, which is a tether-based device that deorbits satellites at the end
  of their mission.
  <br><br>
  <br><b>Role</b>: Designer / Engineer (as part of group of 11)
  <br><b>Course</b>: Product Design Project
  <br><b>Tools</b>: Raspberry Pi, micro-controllers, etc.
  <br><b>Duration</b>: 9 months
badge: Simulating space-like condition on Earth

sections:
  - title: Understanding the requirements
    accent: "#000"
    blocks:
      - html: |
          <p>We began by understanding the problem. Through research and interviews, we compiled a requirements sheet capturing every parameter.</p>
          <p class="muted">e.g. the mass and moment of inertia of the tested hardware; the size and range of motion the engineers expect; how controllable and operable the system needs to be &hellip;</p>
        image:
          src: /images/frictionless-req-image.jpg
          alt: "Plasma Brake Test Bench requirements spreadsheet"

  - title: My contributions, highlighted, in the "Frictionless" system
    accent: "#fff"
    dark: true
    blocks:
      - image:
          src: /images/frictionless-contributions.jpg
          alt: "Sketches of the 'EMMA' end-mass motion analogue, the satellite mock-up, and the graphical user interface"
          fullHeight: true

  - title: "My contributions: Control system"
    accent: "#4a7fe8"
    blocks:
      - html: |
          <p>I implemented 3 control flows, all initiated from the main controller (Raspberry Pi):</p>
          <ol>
            <li>Controller &rarr; Solenoid activated release (via GPIO pin voltage control)</li>
            <li>Controller &rarr; EMMA's microblower (via bluetooth)</li>
            <li>Controller &rarr; Spin-up controller (via USB to the microcontroller)</li>
          </ol>
      - html: |
          <p>For each of these flows, I used software-based simulators to mock the response behaviors as the receiving counterpart was still under development (by other team members).</p>
          <p><strong>Caveat</strong>: The integration still took longer than expected. This was mainly due to confusion about differences in microcontroller models and their mappings, lack of communication that caused mismatch in code, and accidental damages (e.g. me frying a connected raspberry PI on a steel plate).</p>
          <p><strong>Learnings</strong>: Start integration early. Theoretical readiness is reassuring, but still be prepared with added buffers in the schedule. Document the setup steps as there may be a need to redo.</p>

  - title: "My contributions: Graphical User Interface"
    accent: "#ec4899"
    blocks:
      - html: |
          <p>I presented a sketch of my vision for the GUI to the client: the interface is not only a monitoring tool (as they had suggested), but it's also a controller.<br><br> “That would be very useful,” the client said. “But it sounds hard to implement.” <br><br> With the naive confidence of someone who hadn't yet tried to implement it, I reassured them: we could make it work.</p>
        image:
          src: /images/frictionless-sketch.jpg
          alt: "Hand-drawn sketch of the GUI from the client meeting"
          caption: Sketch from the meeting
      - html: |
          <p>I designed the graphic processing pipeline so that the system never had to put raw frames into storage. Instead, the visuals are reconstructed on the fly from numerical position data. <br><br>A much more lightweight system overall.</p>
        image:
          src: /images/frictionless-pipeline.png
          alt: "Diagram of the graphics processing pipeline from camera module to hosted GUI"

  - title: 'The Game at the final exhibition: Minigolf with the mini "Frictionless"'
    accent: "#000"
    blocks:
      - html: |
          <p>To make our product easier to understand at the final exhibition, I designed an interactive game that turned our technology into something visitors could experience firsthand.</p>
          <p>The concept was simple: mini-golf played on a miniature version of our system. By putting the air-bearing puck in their own hands, visitors could physically experience what <i>Frictionless</i> movement feels like.</p>
          <p>The game became an effective conversation starter. It drew people in, gave us a natural way to introduce the technology, and sparked questions about how the air bearing works, how we track motion, and what makes the system reliable.</p>
      - image:
          src: /images/frictionless-game.jpg
          alt: "Visitors playing the Frictionless minigolf game at the gala"

  - title: Takeaways
    variant: circle
    blocks:
      - html: |
          <b>Getting to the actual needs</b> — Design requirements are not always given at the start of a design process. I learned how to approach an unfamiliar domain and formulate the right questions to reach the real problem underneath the brief.
          <br><b>Consistent documentation</b> — We were an international team. We coordinated through weekly meetings and shared documentation. I took an active role in keeping notes, documenting our decision-making, and making sure everyone stayed on the same page from ideation through final integration.
          <br><br>This project was unique in that we had only one defined user. That felt very different from other projects I’ve worked on, where we often have to start by identifying a user group and then balancing the needs of different stakeholders. In that sense, the project felt much closer to pure problem solving than traditional user-centered design.
---
