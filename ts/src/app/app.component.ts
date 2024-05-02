import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';
  showMore = false;
  creatingTopic = false;
  showSuccessMessage = true;
  submitSuccess = false;

  items = [
    {
      id: 1,
      subject: "Assunto da pergunta aparece aqui",
      inside: "Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo",
      author: {
        name: "Carlos Henrique Santos"
      },
      answered: false,
      likes_count: 1,
      comments: [{}, {}],
    },
    {
      id: 2,
      subject: "Assunto da pergunta aparece aqui",
      inside: "Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo",
      author: {
        name: "Carlos Henrique Santos"
      },
      answered: true,
      likes_count: 1,
      comments: [{}, {}],
    },
  ];

  topicForm = this.formBuilder.group({
    subject: '',
    inside: ''
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  show() {
    this.showMore = true;

    const resumeElement = document.getElementById("resume");
    resumeElement?.classList.remove("collapse-data")
  }

  hidden() {
    this.showMore = false;

    const resumeElement = document.getElementById("resume");
    resumeElement?.classList.add("collapse-data")
  }

  showCreateTopicForm() {
    this.creatingTopic = true;
  }

  handleSubmit() {
    console.log(this.topicForm.value);

    if(!this.topicForm.value.subject || !this.topicForm.value.inside) {
      alert("Preencha o assunto e a descrição do tópico!");
      return;
    }

    const newTopic = {
      id: this.items.length,
      subject: this.topicForm.value.subject,
      inside: this.topicForm.value.inside,
      author: {
        name: "Francisco Eduardo Pereira Sousa Silva"
      },
      answered: false,
      likes_count: 0,
      comments: [],
    }

    this.items.unshift(newTopic);
    this.submitSuccess = true;
    this.creatingTopic= false;
  }
}
