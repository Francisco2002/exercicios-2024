import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showMore = false;
  creatingTopic = false;
  showSuccessMessage = true;
  submitSuccess = false;
  editTopic: any = null;

  items = [
    {
      id: 1,
      subject: "Assunto da pergunta aparece aqui",
      inside: "Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo",
      author: {
        name: "Carlos Henrique Santos"
      },
      answered: true,
      likes_count: 1,
      comments: [
        {
          author: {
            name: "Adriano da Silva"
          },
          comment: "Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.",
          isPostAuthor: true,
          isPostCoAuthor: false,
        },
        {
          author: {
            name: "Carlos Henrique Santos"
          },
          comment: "Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo.\n\nObrigada pela resposta, muito interessante o seu trabalho!",
          isPostAuthor: false,
          isPostCoAuthor: false,
        },
        {
          author: {
            name: "Carmila Ferreira Andrade"
          },
          comment: "Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.\n\nSituado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.",
          isPostAuthor: false,
          isPostCoAuthor: true,
        },
        {
          author: {
            name: "Ana Carolina"
          },
          comment: "Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.",
          isPostAuthor: false,
          isPostCoAuthor: true,
        },
      ],
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

  toggleCommentsContainerDisplay(index: number) {
    const card = document.getElementById("card-"+index);

    if(card) {
      if(card.classList.contains('hidden-comments')) {
        console.log("remove");
        card.classList.remove('hidden-comments')
      } else {
        console.log("add")
        card.classList.add('hidden-comments')
      }
    }
  }

  handleSubmit() {
    if(!this.editTopic) {
      const newTopic = {
        id: this.items.length + 1,
        subject: this.topicForm.value.subject || "Teste",
        inside: this.topicForm.value.inside || "Testando",
        author: {
          name: "Francisco Eduardo Pereira Sousa Silva"
        },
        answered: false,
        likes_count: 0,
        comments: [],
      }

      this.items.unshift(newTopic);
    } else {
      const itemsUpdated = this.items.map(item => {
        if(item.id === this.editTopic.id) {
          return {
            ...item,
            subject: this.topicForm.value.subject || "Teste",
            inside: this.topicForm.value.inside || "Testando",
          }
        }

        return item;
      })

      this.items = itemsUpdated;
    }

    this.submitSuccess = true;
    this.creatingTopic= false;
  }

  handleEditTopic(topic: any) {
    this.editTopic = topic;
    this.topicForm.setValue({ subject: topic.subject, inside: topic.inside });
    this.creatingTopic = true;
  }
}
