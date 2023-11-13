---
title: 'goでclean architectureを学ぶ'
created: 2023-11-10
updated: 2023-11-11
tags:
  - 'develop'
  - 'clean-architecture'
---

## はじめに
今まではUdemyなどを参考に今までほぼ写経のような学習を行なってきたのですが、コードを書いている途中に「なんでこんな構成でコードを書いているんだ？」と思うことが何回もありました。そのような疑問を持ちながら学習を進めていくことは嫌なのでまずアーキテクチャの勉強を行うことを考えました。

Goを用いてWebアプリケーションを作成する際のアーキテクチャとしてClean Architectureを使ったものを作成したいので、勉強用のリポジトリを参考に自分なりの解釈をここに書いていきます。他にどのようなアーキテクチャがあって、これがどのような場面で採用すべきものなのかについても学習をする過程で考えることができれば良いなと思っています。

## 学習方法
X(旧Twitter)でこのようなポストを見つけました。
![clean architectureの勉強法](/programming/clean-architecture/image/clean-arch-study.png)

バグ修正のときにchatGPTにはめちゃくちゃお世話になっているので即課金しました。悩まなくてもいい場面で悩まず爆速で進めることができるなら安いものです。

## 環境構築
参考リポジトリ：[go-clean-arch](https://github.com/bxcodec/go-clean-arch)
