<?php

namespace Database\Seeders;

use App\Models\Code;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CodeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Code::create([
            'state' => '1',
            'code' => '12345678912345',
        ]);
        Code::create([
            'state' => '1',
            'code' => '12345678912a45',
        ]);
        Code::create([
            'state' => '2',
            'code' => '12345678912r45',
        ]);
        Code::create([
            'state' => '3',
            'code' => '12345678912c45',
        ]);
        Code::create([
            'state' => '4',
            'code' => '12345678g12345',
        ]);
    }
}
