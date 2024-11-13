import Header from './assets/components/Header.jsx';
import { CORE_CONCEPTS } from './data.js';
import CoreConcept from './assets/components/CoreConcepts.jsx';
import TabButton from './assets/components/TabButton.jsx';

function App() {

  function handleClick(selectedButton){
    console.log(selectedButton)
  }

  return (
    <div>
      <Header />
      <CoreConcept />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
        <TabButton title = "Props" onSelect={() => handleClick('props')}/>
        <TabButton title = "Components" onSelect={() => handleClick("components")}/>
        <TabButton title = "JSX" onSelect={() => handleClick('JSX')}/>
        <TabButton title = "State" onSelect={() => handleClick('State')}/>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
