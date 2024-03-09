class Cheelyche {
    constructor(name, occupation, personality) {
      this.name = name || 'Cheelyche';
      this.occupation = occupation || 'Undefined';
      this.personality = personality || 'Friendly';
      this.skills = [];
    }
  
    learnSkill(skill) {
      this.skills.push(skill);
      console.log(`${this.name} learned a new skill: ${skill}.`);
    }
  
    work() {
      console.log(`${this.name} is working as a ${this.occupation}.`);
    }
  
    displayInfo() {
      console.log(`
        Cheelyche Information:
        Name: ${this.name}
        Occupation: ${this.occupation}
        Personality: ${this.personality}
        Skills: ${this.skills.join(', ')}
      `);
    }
  }
  
  // Example usage
  const cheelychePerson = new Cheelyche('Cheelyche', 'Developer', 'Curious');
  
  cheelychePerson.learnSkill('JavaScript');
  cheelychePerson.learnSkill('React');
  cheelychePerson.work();
  cheelychePerson.displayInfo();
  