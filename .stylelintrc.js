module.exports = {
  // 基本的なルールセットを拡張
  extends: [
    'stylelint-config-standard', // 標準的な推奨ルール
    'stylelint-config-recess-order', // プロパティ記述順ルール（Recess）
    'stylelint-prettier/recommended', // Prettierとの競合ルールを無効化
  ],

  // プロジェクト固有のルールを上書き
  rules: {
    /**
     * BEM命名規則を強制するルール
     * 例: .block__element--modifier
     */
    'selector-class-pattern': [
      '^[a-z]([a-z0-9-]+)?(_([a-z0-9]+-?)+)?(-([a-z0-9]+-?)+)?$',
      {
        resolveNestedSelectors: true,
        message: 'BEMの命名規則 (例: .block_element-modifier) に従ってください',
      },
    ],

    /**
     * IDセレクタの使用を禁止
     */
    'selector-id-pattern': null,

    /**
     * @-規則のベンダープレフィックスを禁止（Autoprefixerで自動付与するため）
     */
    'at-rule-no-vendor-prefix': true,

    /**
     * プロパティのベンダープレフィックスを禁止
     */
    'property-no-vendor-prefix': true,
  },
};
