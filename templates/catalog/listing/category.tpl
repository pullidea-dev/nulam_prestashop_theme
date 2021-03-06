{**
 * 2007-2018 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *}
{extends file='catalog/listing/product-list.tpl'}

{block name='product_list_header'}
    <div id="gkPageContent">
        <div class="gkPage">
            <div id="gkContent">
                <section id="gkMainbody">
                    <div class="browse-view">
                        {if $category.id == 2}
                            {assign var='file' value='cms/cms/13-'|cat:$language.iso_code}
                            {include file=$file|cat:'.tpl'}
                        {else}
                            <h1 class="h1">{$category.name}</h1>
                            {if $category.description}
                                <div id="category-description" class="text-muted">{$category.description nofilter}</div>
                            {/if}
                        {/if}
                        
                    {/block}