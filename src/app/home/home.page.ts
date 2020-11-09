import { Component } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  taskList = [];
  taskName: any;

    constructor(public navCtrl: NavController,public alertCtrl: AlertController) {}

    addTask() {
        if (this.taskName.length > 0) {
            let task = this.taskName;
            this.taskList.push(task);
            this.taskName = "";
        }
    }

    async  updateTask(index) {
      let alert = this.alertCtrl.create({
        
         //title: 'Update Task?',
          message: 'Type  your new task to update.',
          inputs: [{ name: 'editTask', placeholder: 'Task' }],
          buttons: [{ text: 'Cancel', role: 'cancel' },
                    { text: 'Update', handler: data => {
                        this.taskList[index] = data.editTask; }
                    }
                   ]
      });
       (await alert).present()
  }

    deleteTask(index){
      this.taskList.splice(index, 1);
  }

}
