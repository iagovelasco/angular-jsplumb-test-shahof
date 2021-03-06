import { Component, AfterContentInit, OnInit } from '@angular/core';
import { NodeService } from './node.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  nodes = [];

  connections = [];

  constructor(private nodeService: NodeService) {}
  
  ngOnInit() {
    this.fillFromJson();
   
  }

  fillFromJson() {
    const json = `{"nodes":[{"id":"Step_0 id: b46a17","top":177,"left":146},{"id":"Step_1 id: efd2ce","top":302,"left":130},{"id":"Step id_2eb091","top":41,"left":158}],"connections":[{"uuids":["Step_0 id: b46a17_bottom","Step_1 id: efd2ce_top"]},{"uuids":["Step id_2eb091_bottom","Step_0 id: b46a17_top"]}]}`;
    const data = JSON.parse(json);
   
    this.nodes = data.nodes;
    this.connections = data.connections;
  }

}

