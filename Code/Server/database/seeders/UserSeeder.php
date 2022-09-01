<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'email' => 'gamer@gmail.com',
            'password' => '12345._Aa',
            'name' => 'Mark Legend',
            'userName' => 'Mark99',
            'description' => 'Gamer Developer with more than 7 years experince using C#, Java, Unreal Engin, Unity. Gamer Developer with more than 7years experince using C#, Java, Unreal Engin, Unity',
            'image' => "gamer.jpg",
            'field' => "Gamer Developer",
            'youtube'=>'https://www.youtube.com/',
            'linkedin'=>'https://www.linkedin.com/feed/',
            'facebook'=>'https://www.facebook.com/',
            'phone'=>'120840912',
            'role' => 2,
        ]);
        User::create([
            'email' => 'front@gmail.com',
            'password' => '12345._Aa',
            'name' => 'Mohammed Majed',
            'userName' => 'Moh99',
            'description' => 'Front-End Developer with more than 12 years experince using HTML, CSS, Javascript, React. Front-End Developer with more than 12 years experince using HTML, CSS, Javascript, React.',
            'image' => "front.jpg",
            'field' => "Front-End",
            'youtube'=>'https://www.youtube.com/',
            'linkedin'=>'https://www.linkedin.com/feed/',
            'facebook'=>'https://www.facebook.com/',
            'phone'=>'077223147',
            'role' => 2,
        ]);
        User::create([
            'email' => 'fullStack@gmail.com',
            'password' => '12345._Aa',
            'name' => 'Leon Mark',
            'userName' => 'Leo99',
            'description' => 'full-stack Developer with more than 10 years experince using HTML, CSS, Javascript, React, PHP, MySQL, Laravel, full-stack Developer with more than 10 years experince using HTML, CSS, Javascript, React, PHP, MySQL, Laravel.',
            'image' => "full-stack.jpg",
            'field' => "full-stack-developer",
            'youtube'=>'https://www.youtube.com/',
            'linkedin'=>'https://www.linkedin.com/feed/',
            'facebook'=>'https://www.facebook.com/',
            'phone'=>'077223147',
            'role' => 2,
        ]);
        User::create([
            'email' => 'admin@gmail.com',
            'password' => '123_321Aa',
            'name' => 'Admin',
            'userName' => 'Admin',
            'description' => 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
            'image' => "",
            'field' => "Admin",
            'youtube'=>'https://www.youtube.com/',
            'linkedin'=>'https://www.linkedin.com/feed/',
            'facebook'=>'https://www.facebook.com/',
            'phone'=>'0778093279',
            'role' => 0,
        ]);
    }
}
