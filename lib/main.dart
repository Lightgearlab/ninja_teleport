import 'package:flame/game.dart';
import 'package:flutter/material.dart';
import 'package:ninja_teleport/bgparallax.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Ninja Teleport',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: GameWidget(
        game: BGParallax(),
      ),
    );
  }
}
