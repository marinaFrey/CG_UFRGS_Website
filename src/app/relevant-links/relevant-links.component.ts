import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relevant-links',
  templateUrl: './relevant-links.component.html',
  styleUrls: ['./relevant-links.component.css']
})
export class RelevantLinksComponent implements OnInit {

  links = [
    {
      name: "Research Group",
      url: "https://www.inf.ufrgs.br/site/pesquisa/grupos-de-pesquisa/computacao-grafica-processamento-de-imagens-e-interacao/",
      imageUrl: "infufrgs-LOGO.jpg"
    },
    {
      name: "Research Group record on CNPq",
      url: "http://dgp.cnpq.br/dgp/espelhogrupo/7978723913551650",
      imageUrl: "cnpq-logo.png"
    },
    {
      name: "Group videos on Vimeo",
      url: "https://vimeo.com/groups/cgufrgs/videos",
      imageUrl: "vimeo.png"
    },
    {
      name: "Visualization, Interaction and Simulation Lab",
      url: "http://www.inf.ufrgs.br/vislab/",
      imageUrl: "logo.png"
    },
    {
      name: "COVID-19 Data Analysis project",
      url: "https://www.ufrgs.br/coronavis/",
      imageUrl: "coronavis.png"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
