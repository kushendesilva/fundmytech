import 'package:flutter/material.dart';


class ReminderWidget extends StatelessWidget {
          @override
          Widget build(BuildContext context) {
            return Container(
      width: 375,
      height: 812,
      decoration: BoxDecoration(
          color : Color.fromRGBO(255, 255, 255, 1),
  ),
      child: Stack(
        children: <Widget>[
          Positioned(
        top: 60,
        left: 0,
        child: Container(
      decoration: BoxDecoration(
          
  ),
      padding: EdgeInsets.symmetric(horizontal: 16, vertical: 0),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        
        children: <Widget>[],
      ),
    )
      ),Positioned(
        top: 780,
        left: 0,
        child: null
      ),Positioned(
        top: 186,
        left: 0,
        child: Container(
      decoration: BoxDecoration(
          
  ),
      padding: EdgeInsets.symmetric(horizontal: 0, vertical: 0),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        
        children: <Widget>[Container(
      width: 375,
      height: 253,
      
      child: Stack(
        children: <Widget>[
          Positioned(
        top: 0,
        left: 0,
        child: Container(
        width: 375,
        height: 253,
        decoration: BoxDecoration(
          image : DecorationImage(
          image: AssetImage('assets/images/Coolkidsxmasmorning.png'),
          fit: BoxFit.fitWidth
      ),
  )
      )
      ),
        ]
      )
    ), SizedBox(height : 32),
Container(
      decoration: BoxDecoration(
          
  ),
      padding: EdgeInsets.symmetric(horizontal: 0, vertical: 0),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        
        children: <Widget>[
          Container(
      decoration: BoxDecoration(
          
  ),
      padding: EdgeInsets.symmetric(horizontal: 0, vertical: 0),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        
        children: <Widget>[Container(
      width: 341,
      height: 64,
      
      child: Stack(
        children: <Widget>[
          Positioned(
        top: 0,
        left: 0,
        child: Text('Make Your Project Open Source', textAlign: TextAlign.center, style: TextStyle(
        color: Color.fromRGBO(59, 57, 54, 1),
        fontFamily: 'Rubik',
        fontSize: 24,
        letterSpacing: -0.5,
        fontWeight: FontWeight.normal,
        height: 1.3333333333333333
      ),)
      ),
        ]
      )
    ), SizedBox(height : 8),
Text('Help the Community by making your Project Open Source and Free to use with GitHub integration. (Not Required)', textAlign: TextAlign.center, style: TextStyle(
        color: Color.fromRGBO(120, 116, 109, 1),
        fontFamily: 'Rubik',
        fontSize: 14,
        letterSpacing: 0,
        fontWeight: FontWeight.normal,
        height: 1.5
      ),),
],
      ),
    ),

        ],
      ),
    ),
],
      ),
    )
      ),Positioned(
        top: 0,
        left: 0,
        child: null
      ),Positioned(
        top: 44,
        left: 0,
        child: Container(
      decoration: BoxDecoration(
          color : Color.fromRGBO(255, 255, 255, 1),
  ),
      padding: EdgeInsets.symmetric(horizontal: 16, vertical: 0),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        
        children: <Widget>[
          null, SizedBox(width : 0),
Container(
      decoration: BoxDecoration(
          
  ),
      padding: EdgeInsets.symmetric(horizontal: 0, vertical: 0),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        
        children: <Widget>[
          Container(
      decoration: BoxDecoration(
          
  ),
      padding: EdgeInsets.symmetric(horizontal: 0, vertical: 0),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        
        children: <Widget>[Text('Reminder', textAlign: TextAlign.center, style: TextStyle(
        color: Color.fromRGBO(59, 57, 54, 1),
        fontFamily: 'Rubik',
        fontSize: 24,
        letterSpacing: -0.5,
        fontWeight: FontWeight.normal,
        height: 1.3333333333333333
      ),),
],
      ),
    ),

        ],
      ),
    ),

        ],
      ),
    )
      ),
        ]
      )
    );
          }
        }
        