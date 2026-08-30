---
heroImage: /images/frictionless-title-img.png
sponsor:
  name: Aurora Propulsion Technologies
  url: https://aurorapt.space/
intro: >
  Aurora needed an repeatable in-house testing process for their plasma brake
  product, which is a tether-based device that deorbits satellites at the end
  of their mission.
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
          <p>I used software-based simulators to mock the response behaviors as the receiving counterpart is still under development (by other team members).</p>
          <p><strong>Caveat</strong>: The integration still took longer than expected. This was mainly due to confusion about differences in microcontroller models and their mappings, lack of communication that caused mismatch in code, and accidental damages (e.g. frying the raspberry PI on a steel plate :( ).</p>
          <p><strong>Learnings</strong>: Start integration early; More communication.<br />Document the setup steps as there can be a need to redo.</p>

  - title: "My contributions: Graphical User Interface"
    accent: "#ec4899"
    blocks:
      - html: |
          <p>I presented a sketch of my vision for the GUI to the client: the interface is not only a monitoring tool, but it's also a controller.</p>
        image:
          src: /images/frictionless-sketch.jpg
          alt: "Hand-drawn sketch of the GUI from the client meeting"
          caption: Sketch from the meeting
      - html: |
          <p>I designed the graphic processing pipeline so that the system is never storing over X raw frames. The visuals are recreated from the numerical positions, making computation more efficient.</p>
        image:
          src: /images/frictionless-pipeline.png
          alt: "Diagram of the graphics processing pipeline from camera module to hosted GUI"

  - title: 'The Game at the Gala: Minigolf with the mini "Frictionless"'
    accent: "#000"
    blocks:
      - html: |
          <p>I designed an interactive game in order to make our product better understood by our audience during the Gala. It is basically a minigolf on a mini version of our system, where players could directly experience the "frictionless" system with direct engagement.</p>
          <p>The game turned out to be an effective conversation starter, drawing visitors into questions about how the air bearing works, how its motion is being tracked, etc.</p>
      - image:
          src: /images/frictionless-game.jpg
          alt: "Visitors playing the Frictionless minigolf game at the gala"

  - title: Takeaways
    variant: circle
    blocks:
      - html: |
          <p>Design requirements are not always given at the start of a design process. I learned how to approach an unfamiliar domain and formulate the right questions to reach the real problem underneath the brief.</p>
          <p>We were an international team. We coordinated through weekly meetings and shared documentation. I took an active role in keeping notes, documenting our decision-making, and making sure everyone stayed on the same page from ideation through final integration.</p>
---
