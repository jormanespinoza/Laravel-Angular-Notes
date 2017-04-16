<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use API\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 5)->create();
    }
}
