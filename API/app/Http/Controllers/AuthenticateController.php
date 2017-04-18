<?php

namespace API\Http\Controllers;

use API\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthenticateController extends Controller
{
    public function __construct()
    {
        // Apply the jwt.auth middleware to all methods in this controller
        // except for the authenticate method. We don't want to prevent
        // the user from retrieving their token if they don't already have it
        $this->middleware('jwt.auth', ['except' => ['authenticate']]);
    }

    public function index()
    {
        // Retrieve all the users in the database and return them
        $users = User::all();
        return $users;
    }

    public function authenticate (Request $request)
    {
        $credentials = $request->only('email', 'password');

        try {
         // verify the credentials and create a token for the user
          if (!$token = JWTAuth::attempt($credentials)) {
              return response()->json(['error' => 'invalid credentials'], 401);
          }
        } catch (JWTException $e) {
            // something went wrong
            return response()->json(['error' => 'could not create token'], 500);
        }

        // if no errors are encountered we can return a JWT
        $user = JWTAuth::toUser($token);
        return response()->json(compact('token', 'user'), 200);
    }
}
