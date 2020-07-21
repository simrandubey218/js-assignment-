class User{
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.LUcoins = 0;
        this.courses = [];
    }
    login(user){
        console.log(`${this.name} has logged in`);
    }
    logout(user){
        console.log(`${this.name} has logged out`);
    }

    details(user){
        console.log(`username: ${this.name} \n age: ${this.age} \n email: ${this.email} \n LUcoins: ${this.LUcoins} \n courses: ${this.courses}`)
    }
    
}

class Moderator extends User{
    addcoins(user){
        user.LUcoins++;
        console.log(`Username: ${user.name} \n Coins added: +1 \n Total coins: ${user.LUcoins}`);
    }

    removecoins(user){
        user.LUcoins--;
        console.log(`Username: ${user.name} \n Coins removed: -1 \n Total coins: ${user.LUcoins}`);
    }
}

class Admin extends Moderator{
    addcourses(user,course){
        user.courses.push(course);
        console.log(`Username: ${user.name} \n Courses: ${user.courses}`);
    }
    
    removecourses(user,course){
        user.courses.pop(course);
        console.log(`Username: ${user.name} \n Courses: ${user.courses}`);
    } 
}

let user1 = new User('Pavithra', 29, 'p@gmail.com');
let user2 = new User('Soumya', 19, 'S@gmail.com');
let mod = new Moderator('Raphael', 34, 'r@gmail.com');
let admin = new Admin('amy', 20, 'a@gmail.com');
let users = [user1,user2,mod,admin];


users.forEach(element => {
   console.log(element); 
});

user2.login(user2);
user2.details(user2);
mod.addcoins(user2);
admin.addcourses(user2, "C++");
mod.addcoins(user2);
admin.addcourses(user2, "Python");
mod.removecoins(user2);
admin.removecourses(user2, "PHP");

mod.addcoins(user1);
mod.addcoins(user2);

admin.addcourses(user2, 'PHP');
admin.addcourses(user1, 'CSS');

user2.details();
user1.details();
user2.logout(user2);